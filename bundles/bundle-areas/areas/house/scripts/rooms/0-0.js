'use strict';

const { Broadcast } = require('ranvier');

module.exports = {
  listeners: {
    channelReceive: state => function (channel, sender, message) {
      if (channel.name !== 'say') {
        return;
      }

      if (!message.toLowerCase().match('peace')) {
        return;
      }

      const downExit = this.getExits().find(exit => exit.direction === 'north');
      const downRoom = state.RoomManager.getRoom(downExit.roomId);

      Broadcast.sayAt(sender, "Peace to you too! May tranquility accompany you on your journey and fortify you for what is to come...\n\nThe north door opens with a tremendous *creak* that reverberates through the dark chambers beyond.");
      downRoom.unlockDoor(this);
      downRoom.openDoor(this);
    },
  }
};
