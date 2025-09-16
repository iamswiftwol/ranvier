'use strict';

const { Broadcast } = require('ranvier');

const sentHints = {};

module.exports = {
    listeners: {
        lookItem: state => function (item, sender, room) {
            if (sentHints[sender.name]){
                return;
            }
        
            sentHints[sender.name] = 1;

            if (item.id == "desk"){
                setTimeout(function(){
                    Broadcast.sayAt(sender, "Hint: Some items can be picked up and taken with you, like keys for example. Use <i>get</i> plus a word describing the item to grab them");
                    Broadcast.sayAt(sender, "Hint: If the item is inside or on top of another, try getting them 'from' it, e.g. <i>get parchment from desk</i>.");
                    Broadcast.sayAt(sender, "Hint: Check your <i>inventory</i> to know what you have in your pockets");                                  
                },2000);
            }
        }
    }
};
