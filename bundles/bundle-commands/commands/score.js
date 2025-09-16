'use strict';

const sprintf = require('sprintf-js').sprintf;
const { Broadcast: B } = require('ranvier');
const Combat = require('../../bundle-example-combat/lib/Combat');

module.exports = {
  aliases: [ 'stats' ],
  command : (state) => (args, p) => {
    const say = message => B.sayAt(p, message);

    say('<pre>' + `${p.name}, level ${p.level} ${p.playerClass.config.name}` + "</pre>");

    let stats = {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      armor: 0,
      health: 0,
      critical: 0,
    };

    for (const stat in stats) {
      stats[stat] = {
        current: p.getAttribute(stat) || 0,
        base: p.getBaseAttribute(stat) || 0,
        max: p.getMaxAttribute(stat) || 0,
      };
    }

    B.at(p, sprintf(' %-9s: %12s', 'Health', `${stats.health.current}/${stats.health.max}`));
    say('\n\n<pre>Weapon</pre>');

    // class resource
    switch (p.playerClass.id) {
      case 'lion':
        const energy = {
          current: p.getAttribute('energy'),
          max: p.getMaxAttribute('energy')
        };
        B.at(p, sprintf(' %-9s: %12s', 'Energy', `${energy.current}/${energy.max}`));
        break;
      case 'lioness':
        const mana = {
          current: p.getAttribute('mana'),
          max: p.getMaxAttribute('mana')
        };
        B.at(p, sprintf(' %-9s: %12s', 'Mana', `${mana.current}/${mana.max}`));
        break;
      // case 'paladin':
      //   const favor = {
      //     current: p.getAttribute('favor'),
      //     max: p.getMaxAttribute('favor')
      //   };
      //   B.at(p, sprintf(' %-9s: %12s', 'Favor', `${favor.current}/${favor.max}`));
      //   break;
      default:
        //B.at(p, B.line(24, ' '));
        break;
    }
    //say(sprintf('%35s', '.' + B.line(22)) + '.');

    //B.at(p, sprintf('%37s', '|'));
    const weaponDamage = Combat.getWeaponDamage(p);
    const min = Combat.normalizeWeaponDamage(p, weaponDamage.min);
    const max = Combat.normalizeWeaponDamage(p, weaponDamage.max);
    B.at(p, sprintf(' %9s:%5s - %-5s', 'Damage', min, max));
    //B.at(p, sprintf('%37s', '|'));
    B.at(p, sprintf(' %9s: %12s', 'Speed', Combat.getWeaponSpeed(p) + ' sec'));

    //say(sprintf('%60s', "'" + B.line(22) + "'"));

    say('<pre>Stats</pre>');
//    say('.' + B.line(22) + '.');


    const printStat = (stat, newline = true) => {
      const val = stats[stat];
      const statColor = (val.current > val.base ? 'green' : 'white');
      const str = sprintf(
        `%-9s : <${statColor}>%8s</${statColor}>`,
        stat[0].toUpperCase() + stat.slice(1),
        val.current
      );

      if (newline) {
        say(str);
      } else {
        B.at(p, str);
      }
    };

    printStat('strength', false); // left
    say('Gold :' + (p.getMeta('currencies.gold') || 0)); // right
    printStat('agility', false); // left
    //say(sprintf('%36s', '.' + B.line(12) + '.')); // right
    printStat('intellect', false); // left
    //say(sprintf('%22s| %10s |', '', p.getMeta('currencies.gold') || 0)); // right
    printStat('stamina', false); // left
    //say(sprintf('%36s', "'" + B.line(12) + "'")); // right

    //say(':' + B.line(22) + ':');
    printStat('armor');
    printStat('critical');
    //say("'" + B.line(22) + "'");
  }
};
