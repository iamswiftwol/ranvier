'use strict';

const { Config, Broadcast } = require('ranvier');

module.exports = {
  usage: 'quit',
  command: (state) => (args, player) => {
    if (player.isInCombat()) {
      return Broadcast.sayAt(player, "You're too busy fighting for your life!");
    }
    const startingRoomRef = Config.get('startingRoom');

    const currentRoom = player.room;
    
    const room = state.RoomManager.getRoom(startingRoomRef);
    player.room = room;

    currentRoom.removePlayer(player);

    player.save(() => {
      Broadcast.sayAt(player, "Goodbye!");
      Broadcast.sayAtExcept(player.room, `${player.name} disappears.`, player);
      state.PlayerManager.removePlayer(player, true);
    });
  }
};
