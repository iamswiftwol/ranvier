'use strict';

module.exports = {
  listeners: {
    playerEnter: state => function (player) {
      if (this.hasEffectType('speaking')) {
        return;
      }

      const speak = state.EffectFactory.create('speak', {}, {
        messageList: [
          "Welcome, %player%. Enter the mansion with the command 'north'.",
          "You can move in any direction mentioned in the current room's '[Exits: ]'",
          "If you want to know more, you can ask me with 'help' or 'help {command}. eg. 'help kill'",
          "I tried to get the treasure myself, but without a map...",
        ],
        outputFn: message => {
          message = message.replace(/%player%/, player.name);
          state.ChannelManager.get('say').send(state, this, message);
        }
      });
      this.addEffect(speak);
    },

    playerLeave: state => function (player) {
      const speaking = this.effects.getByType('speaking');
      if (speaking) {
        speaking.remove();
      }
    }
  }
};
