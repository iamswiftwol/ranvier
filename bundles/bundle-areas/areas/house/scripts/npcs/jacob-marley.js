'use strict';

const { Broadcast, Logger } = require('ranvier');

module.exports = {
  listeners: {
    spawn: state => function (player) {
      // if (this.hasEffectType('speaking')) {
      //   return;
      // }

      // const speak = state.EffectFactory.create('speak', {}, {
      //   messageList: [
      //     "Oh! captive, bound, and double-ironed.",
      //     "Not to know that no space of regret can make amends for one life’s opportunity misused! Yet such was I! Oh! such was I! I, Jacob Marley, thought always that I was a good Lion of business…but Business? What of that? Lionkind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence, were, all, my business. The dealings of my financial trade, were but a drop of water in the comprehensive ocean of my BUSINESS! Like Scrooge long before you, good Lion, tonight you will be haunted by Three Spirits. Listen to the lessons they offer. Without their visits, you cannot hope to shun the path I tread...",
      //   ],
      //   outputFn: message => {
      //     state.ChannelManager.get('say').send(state, this, message);
      //   }
      // });
      // this.addEffect(speak);
    }
  }
};
