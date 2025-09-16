'use strict';

const { Broadcast } = require('ranvier');

module.exports = {
    listeners: {
        lookItem: state => function (item, sender, room) {

            if (item.id == "clock"){
                setTimeout(function(){
                    Broadcast.sayAt(sender, `And directly in front of you appears a figure unlike any you have ever seen. It is a strange figure—much like a Cub: yet not so like a Cub as like an old Lioness. Her mane is white as if with age; and yet the face has not a wrinkle in it. From deep within her mane shimmers light like a thousand stars`);
                    const ghost = room.spawnNpc(state, "house:christmas-past");
                    const r = room;
                    const p = sender;
                    //Broadcast.sayAt(p, `Someone has appeared in the room.`);              
                    setTimeout(() => {
                        Broadcast.sayAt(p, `<b>Lion of Christmas Past says: I am the Lion of Christmas Past. I offer you the gift of MEMORY.</b> in a clear, high voice like a bell`);              
                    }, 2000);
                    setTimeout(() => {
                        Broadcast.sayAt(p, `She waves a paw to the painted panels around the room, and you realize to your amazement that they illustrate various chapters of your life. One panel shows you as an impoverished little Cub in school, excitedly waiting for your beloved sister to arrive and take you to Old Fuzzywig's Christmas party to start the holiday break. Another panel depicts your first romantic courtship, and the Christmas Eve when you happily swore to be faithful in love despite your modest means. Finally, on the far wall, there is another panel that memorializes what now lives in your heart in shame: the Christmas you turned aside from that love, vowing instead to amass your fortune in the world of business. "Spirit!" you exclaim as aching sadness creeps into your thoughts, "Show me no more." How could you have been so happy once with so little, you wonder. And why do you feel so unsatisfied now that you have so much more? As you find yourself overwhelmed by these thoughts, the Spirit's light grows to a room-blinding white, and you shield your eyes with your paws. A great howling wind rises and tousles your fur. You hear the grandfather clock groan and fall with a deafening crash on the floor, wood snapping and metal clanging. When the light dims and the sound subsides, you find yourself completely alone amidst the wreckage. A small Gold Key gleams on the floor.`);
                        r.spawnItem(state, "house:gold-key");    
                    }, 4000);
                    setTimeout(() => {
                        //Broadcast.sayAt(p, `Someone has disappeared from the room.`);              
                        r.removeNpc(ghost, true);
                    }, 5000);
                    // setTimeout(() => {
                    //     r.spawnItem(state, "house:gold-key");    
                    //     Broadcast.sayAt(p, "Clank!");   
                    // }, 6000);
                },2000);
            }
        }
    }
};
