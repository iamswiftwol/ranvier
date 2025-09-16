'use strict';

const { Account, EventUtil } = require('ranvier');

/**
 * Account creation event
 */
module.exports = {
  event: (state) => (socket, name) => {
    const write = EventUtil.genWrite(socket);
    const say = EventUtil.genSay(socket);

    let newAccount = null;
    write(`<bold>I'll now create your account for the game, ${name}</bold> `);

      
    say('Creating account...');
    newAccount = new Account({
      username: name
    });

    return socket.emit('change-password', socket, {
      account: newAccount,
      nextStage: 'create-player'
    });
      
    
  }
};
