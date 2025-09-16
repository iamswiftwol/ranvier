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
        Broadcast.sayAt(player);
        Broadcast.sayAt(player, `Hint: Interesting items in the room can be inspected by saying <i>look</i> and one word describing the item, e.g. <i>look fog</i>`);
        Broadcast.sayAt(player, `Hint: You can also use single quotes for complete names. e.g. <i>look 'dense fog'</i>`);
        Broadcast.sayAt(player, `Hint: You can move around by saying the direction you wish to go, e.g. <i>north</i>. You can also use the buttons below, but don't trust them completely.`);
        Broadcast.sayAt(player, `Hint: Some doors are closed, some are locked. You can open them by saying <i>open</i> and the direction of that door, e.g. <i>open north</i>. You can also <i>unlock</i> doors, provided you find the right key `);       
      },2000);
    },
    lookItem: state => function (item, sender, room) {
      
    

    }
  }
};
