'use strict';

const { Broadcast, Logger } = require('ranvier');

module.exports = {
  listeners: {
    // spawn: state => function (player) {
    //   if (this.hasEffectType('speaking')) {
    //     return;
    //   }

    //   const speak = state.EffectFactory.create('speak', {}, {
    //     messageList: [
    //       "I am the Lion of Christmas Past. I offer you the gift of MEMORY.",
    //     ],
    //     outputFn: message => {
    //       state.ChannelManager.get('say').send(state, this, message);
    //     }
    //   });
    //   this.addEffect(speak);
    // }
  }
};
