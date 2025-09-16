'use strict';

const { Broadcast: B } = require('ranvier');

module.exports = {
  usage: 'who',
  command: (state) => (args, player) => {
    B.sayAt(player, "<bold><red>Who's Online</red></bold>");
    B.sayAt(player, "<bold><red>============</red></bold>");
    B.sayAt(player, '');

    state.PlayerManager.players.forEach((otherPlayer) => {
      B.sayAt(player, ` *  ${otherPlayer.name} ${getRoleString(otherPlayer.role)}`);
    });

    B.sayAt(player, state.PlayerManager.players.size + ' total');

    function getRoleString(role = 0) {
      return [
        '',
        '<white>[Builder]</white>',
        '<b><white>[Admin]</white></b>'
      ][role] || '';
    }
  }
};
