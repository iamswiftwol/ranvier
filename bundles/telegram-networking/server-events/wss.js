'use strict';

// import 3rd party websocket library
const TelegramBot = require('node-telegram-bot-api');
const token = '8398646489:AAG8A2EnYXbrKb90ofyH6sN3eoUDOtnKWJk';

const { Logger } = require('ranvier');

// import our adapter
const TelegramStream = require('../lib/TelegramStream');
const streams = {};

module.exports = {
  listeners: {
    startup: state => function (commander) {
      // create a new websocket server using the port command line argument
      const bot = new TelegramBot(token, {polling: true});

      bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const sender = msg.from.username || (msg.from.first_name + (msg.from.last_name || ''));
        try{
        if (!(sender in streams)){
          const stream = new TelegramStream();
          const eventManager = state.InputEventManager;
          streams[sender] = stream;
          streams[sender].username = sender;
          stream.attach(bot, chatId, sender, function() {
            delete streams[sender];
          });
          state.InputEventManager.attach(stream);

          stream.write("Connecting...\n");
          Logger.log("User connected via telegram...");
          stream.emit('intro', stream);

        } else {
          console.log("COMMAND ["+sender+"] :"+msg.text);
          console.log("current users: "+Object.keys(streams));
          //console.log(state.PlayerManager.getPlayersAsArray());
          if (msg.text.indexOf("/") < 0){
            streams[sender].emit('data', msg.text);
          } else {
            var commands = msg.text.split('/');
            console.log(commands);
            while (commands.length > 3) commands.pop();
            commands.forEach(function(c){
              console.log(c);
              streams[sender].emit('data',c.trim());
            });

            
          }
        }
      } catch (e) { console.log(e);}
      });
    },

    shutdown: state => function () {
      // no need to do anything special in shutdown
    },
  }
};
