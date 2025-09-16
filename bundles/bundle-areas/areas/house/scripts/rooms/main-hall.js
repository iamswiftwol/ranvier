'use strict';

const { Broadcast } = require('ranvier');

const sentHints = {};

module.exports = {
  listeners: {
    playerEnter: state => function (player) {
      if (sentHints[player.name]){
        return;
      }

      sentHints[player.name] = 1;
      setTimeout(function(){
        Broadcast.sayAt(player, "Hint: You can save your game with <i>save</i>");
        Broadcast.sayAt(player, "Hint: If you want to go to the beginning, use <i>quit</i>.");
    },2000);
    }
  }
};
