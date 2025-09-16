'use strict';

const { Broadcast } = require('ranvier');

const sentHints = {};

module.exports = {
    listeners: {
        lookItem: state => function (item, sender, room) {

            const northExit = room.getExits()[0];
            const northRoom = room.area.getRoomById("main-hall");
            //console.log(northRoom);


            setTimeout(function(){
                Broadcast.sayAt(sender, "The front door creaks open on its own... \n\n[<b>Exits</b>: north]");      
                room.unlockDoor(northRoom);
                room.openDoor(northRoom);          
            },2000);
          

        },
        playerEnter: state => function (player) {
            if (sentHints[player.name]){
                return;
              }
        
            sentHints[player.name] = 1;
            setTimeout(function(){
                Broadcast.sayAt(player);
                Broadcast.sayAt(player, `Hint: You can look at the room again by saying <i>look</i>. This is useful to spot changes or new items.`);
                Broadcast.sayAt(player, `Hint: Things have a mind of their own around here. Doors close by themselves, sometimes quickly after opening them, so move fast, or you will need to open them again...`);
            },2000);
        }
    }
};
