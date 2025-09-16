'use strict';

const { TransportStream, Logger } = require('ranvier');
const TelegramBot = require('node-telegram-bot-api');

/**
 * Essentially we want to look at the methods of WebSocket and match them to the appropriate methods on TransportStream
 */
class TelegramStream extends TransportStream
{
  bot;
  chatId;
  onClose;
  username;

  attach(bot, chatId, username, onClose) {
    super.attach(bot);
    this.bot = bot;
    this.chatId = chatId;
    this.onClose = onClose;
    this.username = username;
  }

  get writable() {
    return this.bot != null;
  }

  write(message) {
    if (!this.writable) {
      return;
    }

    sendMessage(this.bot, this.chatId, this.username, this.htmlTags(message), {parse_mode : "HTML"});    
  }

  htmlTags(s){
    s = s.replaceAll("<white>", "<strong>");
    s = s.replaceAll("<green>", "<strong>");
    s = s.replaceAll("<blue>", "<strong>");
    s = s.replaceAll("<red>", "<strong>");
    s = s.replaceAll("<cyan>", "<strong>");
    s = s.replaceAll("<yellow>", "<strong>");
    s = s.replaceAll("<magenta>", "<strong>");
    s = s.replaceAll("<black>", "<strong>");

    s = s.replaceAll("</black>", "</strong>");
    s = s.replaceAll("</magenta>", "</strong>");
    s = s.replaceAll("</yellow>", "</strong>");
    s = s.replaceAll("</cyan>", "</strong>");
    s = s.replaceAll("</white>", "</strong>");
    s = s.replaceAll("</green>", "</strong>");
    s = s.replaceAll("</blue>", "</strong>");
    s = s.replaceAll("</red>", "</strong>");
    s = s.replaceAll("<bold>", "<b>");
    s = s.replaceAll("</bold>", "</b>");

    s = s.replaceAll("<br>", "\n");

    return s;
  }

  pause() {
    this.bot.pause();
  }

  resume() {
    this.bot.resume();
  }

  end() {
    console.log("ENDING...");
    this.onClose();

  }

  executeSendData(group, data) {
    if (!this.writable) {
      return;
    }

  //  console.log(JSON.stringify({
  //     type: 'data',
  //     group,
  //     data
  //   }));
  }
}

module.exports = TelegramStream;


var Promise = require('bluebird');
var queue = [];
var inUseQueue = [];
var separator = "";

function flattenQueue(queue){
  if (queue.length < 2) return queue;

  const flatQueue = [];
  for(var i=1;i<queue.length;i++){
    if (queue[i].chatId != queue[i-1].chatId || queue[i-1].message.includes("#images")){
      queue[i-1].message = queue[i-1].message;
      flatQueue.push(queue[i-1]);
    } else {
      queue[i].message = queue[i-1].message + "\n" + queue[i].message;
    }
  }
  flatQueue.push(queue[queue.length-1]);
  return flatQueue;
}

function _sendMessages() {
    // if we are already sending messages from the queue, or
    // the queue is empty, stop
    if (inUseQueue.length || !queue.length) return;

    inUseQueue = queue;
    queue = [];

    Promise.mapSeries(flattenQueue(inUseQueue), function(request) {
        var resolve = request.resolve;
        var reject = request.reject;
        var bot = request.bot;
        if (request.message.trim() == '') request.message = '-';
        var textmsg = request.message;
        if (textmsg.includes("<image>")){
          const textarray = textmsg.split("<image>");
          var imagemsg = textarray[1].trim();
          textmsg = textarray[0] + textarray[2];
          console.log("sending image URL: /home/zed/Ranvier/images/"+imagemsg);
          bot.sendPhoto(request.chatId, "/home/zed/Ranvier/images/"+imagemsg);
        }
        var buttons = [];
        if (textmsg.includes("<buttons>")){
          const textarray = textmsg.split("<buttons>");
          var buttons = textarray[1].trim().split(" ");
          textmsg = textarray[0] + textarray[2];
        }
        
        // Remove all terminal control characters from textmsg
        textmsg = textmsg.replace(
          // eslint-disable-next-line no-control-regex
          /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''
        );
        

        Logger.log("["+ request.username + "]: "+ separator+textmsg);

        return bot.sendMessage(request.chatId, separator + textmsg, {parse_mode : "HTML", "reply_markup": {
          "keyboard": [buttons], one_time_keyboard: true, resize_keyboard: true
          }})
            .then(function(){
              resolve();
            })
            .catch(function(e){
              //retry once
              console.log("RETRYING MSG ONCE!!!!!");
              console.log(e);
              bot.sendMessage(request.chatId, separator + textmsg, {parse_mode : "HTML", "reply_markup": {
                "keyboard": [buttons], one_time_keyboard: true, resize_keyboard: true
                }}).then(resolve).catch(reject);
            });
    }).then(function() {
        inUseQueue = [];
        setTimeout(function(){
          _sendMessages();
        }, 500);
    });
}

function sendMessage(bot, chatId, username, message) {
    var resolve, reject;
    var promise = new Promise(function(promiseResolve, promiseReject) {
        resolve = promiseResolve;
        reject = promiseReject;
    });
    queue.push({ bot, chatId, username, message, resolve, reject });
    process.nextTick(_sendMessages);
    return promise;
}

// example usage
function toLog(message) { return function() { console.log(message); }; };

