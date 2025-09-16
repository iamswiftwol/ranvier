'use strict';

const { Broadcast } = require('ranvier');

module.exports = {
  listeners: {
    playerEnter: state => function (player) {
      const downExit = this.getExits().find(exit => exit.direction === 'south');
      const downRoom = state.RoomManager.getRoom(downExit.roomId);
      //console.log(downRoom);
      this.closeDoor(downRoom);
      this.lockDoor(downRoom);
      //console.log(downRoom);

      Broadcast.sayAt(player, `*click* the door closes behind you, there's no way back now...`);       
    }
  }
};
