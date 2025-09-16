'use strict';

const { Broadcast } = require('ranvier');

module.exports = {
    listeners: {
        lookItem: state => function (item, sender, room) {

            if (item.id == "attic-window"){
                setTimeout(function(){
                    Broadcast.sayAt(sender, `In an easy state upon this couch of food, there now sits a jolly Giant Lion, glorious to see in his curly white fur; bearing a glowing torch.`);
                    const ghost = room.spawnNpc(state, "house:christmas-present");
                    const r = room;
                    const p = sender;
                    //Broadcast.sayAt(p, `Someone has appeared in the room.`);              
                    setTimeout(() => {
                        Broadcast.sayAt(p, `<b>Lion of Christmas Present says: Come in!</b>`);              
                    }, 2000);
                   
                    setTimeout(() => {
                        Broadcast.sayAt(p, `<b>Lion of Christmas Present says: Come in! and know me better, Lion! I am the Lion of Christmas Present! Look upon me!</b>`);              
                    }, 3000);

                    setTimeout(() => {
                        Broadcast.sayAt(p, `He is clothed in one simple green robe bordered with white fur. Upon his head is a holly wreath, set here and there with shining icicles. His mane is long and free; free as his genial face and sparkling eye.`);              
                    }, 4000);

                    setTimeout(() => {
                        Broadcast.sayAt(p, `<b>Lion of Christmas Present says: Friend, I offer you the gift of SIGHT. Come with me, and look.</b>`);              
                    }, 6000);

                    setTimeout(() => {
                        Broadcast.sayAt(p, `He leaps powerfully to the garret window. From that vantage, you can see all across the city of Liondon, over every bridge and down every street, into the windows of every business and home, and at all the various Lions going about their cold and hurried Christmas Eve ventures. Your far-sighted gaze now settles on one young father, carrying a small Cub down a street of a less fortunate section of the city. The two laugh as they toss a snowball at an unsuspecting neighbor. "Good form, Oliver!" the neighbor roars back. "Feeling better, are you?" "Almost," the Cub replies, "I always feel better this night of the year, sir." It is only when they reach their modest home further along the street that the father sets Oliver down at the doorstep. "Now won't they be surprised when they see you enter without my carrying you, son..." he says kindly, and he opens the front door to the happy home. And so Oliver moves, pawstep by wobbly pawstep, determined and without assistance, into the entrance of the small house. A cacophony of surprised and happy yelps from a litter of brother and sister Cubs greets his efforts. They tumble over to him to lick and paw at him lovingly, but he is already exhausted. His mother bounds over to him and rubs her face against his small body. "That was magnificent, Oliver," she purrs, before picking him up with a careful bite on the scruff of his neck and bringing him over to the small feast she and the older Cubs have prepared. It is a small meal, only a modest turkey and potatoes for the entire family, but the clan is happy and offers Oli the first bite of the bird. "Spirit," you say, "what will happen to this sick Cub?" Your guide's face darkens. `);              
                    }, 7000);

                    setTimeout(() => {
                        Broadcast.sayAt(p, `<b>Lion of Christmas Present whispers: That is not for me to say</b>`);              
                    }, 10000);
                    setTimeout(() => {
                        Broadcast.sayAt(p, `<b>Lion of Christmas Present says: It is simply enough to show you that this Christmas, at least, is a happy one.</b>`);              
                    }, 11000);

                    setTimeout(() => {
                        Broadcast.sayAt(p, `You look at the opulent, magical pile of food here in the attic and wonder how it could somehow reach the poor family across the river, when the entire image in front of you vanishes. The starlight from the garret window dims, the city fades, the ghostly feast dissolves back into dust, and you are alone again in the large, empty attic.`);                    
                      }, 13000);

                    setTimeout(() => {
                        r.removeNpc(ghost, true);
                        //Broadcast.sayAt(p, `Someone has disappeared from the room.`);              
                    }, 15000);
                        
                    setTimeout(() => {
                        r.spawnItem(state, "house:bronze-key");    
                        Broadcast.sayAt(p, "Clank!");   
                      }, 16000);
                  },2000);
            }
        }
    }
};
