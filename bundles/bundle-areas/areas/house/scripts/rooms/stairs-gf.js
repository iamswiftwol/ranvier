'use strict';

const { Broadcast } = require('ranvier');

const sentHints = {}

module.exports = {
  listeners: {
    playerEnter: state => function (player) {
      if (sentHints[player.name]){
        return;
      }

      sentHints[player.name] = 1;

      setTimeout(function(){
          Broadcast.sayAt(player, "Is it possible you see a ghostly Lion's face hovering in the inky dark beyond the stair's ballustrades? You blink... it must have been your imagination.");              
      },5000);
    }
  }
};
