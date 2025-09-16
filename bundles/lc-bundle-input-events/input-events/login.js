'use strict';

const { Logger } = require('ranvier');
const CommonFunctions = require('../lib/CommonFunctions');

module.exports = {
  event: state => (socket, args) => {
    if (!args || !args.dontwelcome) {
      socket.write('Welcome, '+socket.username);

      async function run(name){

        let account = null;
        try {
          account = await state.AccountManager.loadAccount(name);
        } catch (e) {
          Logger.error(e.message);
        }

        if (!account) {
          Logger.error(`No account found as ${name}.`);
          return socket.emit('create-account', socket, name);
        }

        if (account.banned) {
          socket.write('This account has been banned.\r\n');
          socket.end();
          return;
        }

        if (account.deleted) {
          socket.write('This account has been deleted.\r\n');
          socket.end();
          return;
        }

        return socket.emit('password', socket, { dontwelcome: false, account });
      }
      run(socket.username.toUpperCase());
    }


  }
};
