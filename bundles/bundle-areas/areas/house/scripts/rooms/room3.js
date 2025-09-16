'use strict';

const { Broadcast } = require('ranvier');

module.exports = {
    listeners: {
        // channelReceive: state => function (channel, sender, message) {
        //     if (channel.name !== 'say') {
        //       return;
        //     }
      
        //     if (!message.toLowerCase().indexOf('there') > 0) {
        //       return;
        //     }
      
        //     const room = this;
            
        //     setTimeout(function(){
        //         Broadcast.sayAt(sender, `The fur on your back stands up and your tail puffs out in alarm, as there emerges out of the darkness in front of you a Phantom Lion, wearing pince-nez glasses and wrapped in heavy chains.`);
        //         const jacob = room.spawnNpc(state, "house:jacob-marley");
        //         const r = room;
        //         const p = sender;
        //         Broadcast.sayAt(p, `Someone has appeared in the room.`);              
        //         setTimeout(() => {
        //             Broadcast.sayAt(p, `<b>Jacob Marley says: Oh! captive, bound, and double-ironed.</b>`);              
        //         }, 2000);
        //         setTimeout(() => {
        //             Broadcast.sayAt(p, `<b>Jacob Marley says: Not to know that no space of regret can make amends for one life’s opportunity misused! Yet such was I! Oh! such was I! I, Jacob Marley, thought always that I was a good Lion of business…but Business? What of that? Lionkind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence, were, all, my business. The dealings of my financial trade, were but a drop of water in the comprehensive ocean of my BUSINESS! Like Scrooge long before you, good Lion, tonight you will be haunted by Three Spirits. Listen to the lessons they offer. Without their visits, you cannot hope to shun the path I tread...</b>`);              
        //         }, 4000);
        //         setTimeout(() => {
        //             Broadcast.sayAt(p, `Someone has disappeared from the room.`);              
        //             r.removeNpc(jacob, true);
        //         }, 9000);
        //         setTimeout(() => {
        //           Broadcast.sayAt(p, `And as quickly as he emerged from the darkness, the Phantom Lion retreats again, until the sound of his dragging chains fades deep within the building. It is a full minute before you allow yourself to breathe again, and as your nerves and fur settle, you notice a large iron key on the floor where Jacob Marley stood.`);
        //         }, 10000);
        //       },2000);
        //     setTimeout(function(){
        //         room.spawnItem(state, "house:iron-key");      
        //     },10000);

        //   },
        lookItem: state => function (item, sender, room) {

            if (item.id == "bell"){
                setTimeout(function(){
                    Broadcast.sayAt(sender, `The fur on your back stands up and your tail puffs out in alarm, as there emerges out of the darkness in front of you a Phantom Lion, wearing pince-nez glasses and wrapped in heavy chains and a multitude of iron locks.`);
                    const jacob = room.spawnNpc(state, "house:jacob-marley");
                    const r = room;
                    const p = sender;
                    //Broadcast.sayAt(p, `Someone has appeared in the room.`);              
                    setTimeout(() => {
                        Broadcast.sayAt(p, `<b>Phantom Lion cries: “Oh! captive, bound, and double-ironed”</b>`);              
                    }, 2000);
                    setTimeout(() => {
                        Broadcast.sayAt(p, `<b>Phantom Lion says: Not to know that no space of regret can make amends for one life’s opportunity misused! Yet such was I! Oh! such was I! I, Jacob Roarley, thought always that I was a good Lion of business…but Business? What of that? Lionkind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence, were, all, my business. The dealings of my financial trade, were but a drop of water in the comprehensive ocean of my BUSINESS! Like Ebenezfur Scrooge long before you, good Lion, tonight you will be haunted by Three Spirits. Listen to the lessons they offer. Without their visits, you cannot hope to shun the path I tread...</b>`);              
                    }, 4000);
                    setTimeout(() => {
                        //Broadcast.sayAt(p, `Someone has disappeared from the room.`);              
                        r.removeNpc(jacob, true);
                    }, 9000);
                    setTimeout(() => {
                      Broadcast.sayAt(p, `And as quickly as he emerged from the darkness, the Phantom Lion retreats again, until the sound of his dragging chains fades deep within the building. It is a full minute before you allow yourself to breathe again, and as your nerves and fur settle, you notice a large Iron Key on the floor where Jacob Roarley stood.`);
                    }, 10000);
                    setTimeout(() => {
                        Broadcast.sayAt(p, `Hint: use <code>look</code> to check for items in the room. If you see an item, you can try to pick it up with <i>get</i> and the name of the item. e.g. <i>get 'iron key'</i>.`);
                      }, 12000);
                  },2000);
                setTimeout(function(){
                    room.spawnItem(state, "house:iron-key");      
                },10000);
            }
        }
    }
};
