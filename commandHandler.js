const Discord = require("discord.js");
const fs = require("fs");

const DepugCommands = require('./commands/depugCommands');
const AdminCommands = require('./commands/adminCommands');
const Game = require('./Game/gameCommands');

class CommandHandler {
    static Parse (message, args, bot, member, gameInfo) {
        const cmd = args.shift().toLowerCase();
        switch(cmd) {
            case 'ping':
                DepugCommands.Ping(message);
                break;
            case 'uptime':
                DepugCommands.UpTime(message, bot);
                break;
            case 'restart':
                AdminCommands.Restart(message, bot);
                break;
            case 'test':
                DepugCommands.Testing(message);
                break;


            case 'gamehelp':
                Game.GameHelp(message, bot);
                break;
            case 'controls':
                Game.Controls(message, bot);
                break;
            case 'howto':
                Game.Howto(message, bot);
                break;
            case 'activate':
                Game.ActivateAccount(member, message, bot);
                break;
            case 'active':
                Game.CheckActive(member, message, bot);
                break;
            case 'setprof':
            case 'setprofile':
                Game.SetProf(member, message, bot, args);
                break;
            case 'prof':
            case 'profile':
                Game.Prof(member, message, bot, args);
                break;
            
            case 'gametest':
                Game.Test(member, message, bot, args);
                break;


            default:
                return;
        }
    }
}
module.exports = CommandHandler;