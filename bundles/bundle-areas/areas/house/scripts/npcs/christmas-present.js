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
    //       "Come in!",
    //       "Come in! and know me better, Lion! I am the Lion of Christmas Present! Look upon me!",
    //     ],
    //     outputFn: message => {
    //       state.ChannelManager.get('say').send(state, this, message);
    //     }
    //   });
    //   this.addEffect(speak);
    // }
  }
};
