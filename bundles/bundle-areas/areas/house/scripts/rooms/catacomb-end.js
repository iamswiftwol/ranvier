'use strict';

const { Broadcast } = require('ranvier');

module.exports = {
    listeners: {
        lookItem: state => function (item, sender, room) {

            if (item.id == "pool"){
                setTimeout(function(){
                    Broadcast.sayAt(sender, `You feel a powerful presence behind you, imposing and grim. Instinctively, you know not to turn to look, but instead to peer deeper into the water in front of you. "Are you," you whisper, "the SPIRIT of Christmas Yet To Come?" The spectre behind you does not reply. Out of the corner of your eye, you see a boney, robed paw reach out and wave over the water. Instead of your own reflection, there now appears a scene before you, of a cold and desolate churchyard. Wind rustles the dead leaves on a black and crooked tree. Beneath it, two grim Lions are holding their hats and offering a bouquet of flowers to a new headstone. "Goes to show you," one of them says softly, "No one takes it with them in the end." The two Lions bow their heads in reverence before turning and walking away. "Who is that?" you whisper. But the long, pale claw simply points at the scene before you. With terrible dread, you know the answer moments before you read your own name on the headstone. "Spirit," you say, "Show me no more! I will honour the Pride in my heart, and try to keep that faith all the year! I will live in the Past, the Present, and the Future. I will honor the spirit of love, and help those who have been offered less by Fortune than what Fortune has offered me! The Spirits of all Three shall strive within me. Oh, tell me I may sponge away the writing on this stone!”.`);
                    const ghost = room.spawnNpc(state, "house:christmas-future");
                    const r = room;
                    const p = sender;
                    setTimeout(() => {
                      r.removeNpc(ghost, true);
                      Broadcast.sayAt(p, `But the spectre is gone, and you see nothing in the water now but your own stunned reflection.`);
                    }, 10000);
                  },2000);
            }
        }
    }
};
