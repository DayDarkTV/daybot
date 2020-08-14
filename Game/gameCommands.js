const {Client, MessageEmbed} = require('discord.js');
const EmbedManager = require('../embedManager');
const PlayerData = require('./playerData');
const DataManager = require('./dataManager');

class GameCommands {

    static GameHelp(message, bot) {

    }

    static Controls(message, bot) {

    }

    static Howto(message, bot) {

    }

    static asdf(message, bot) {

    }

    static ActivateAccount(member, message, bot) {

    }

    static SetProf(member, message, bot, args) {
        if(args[0] != `prof1` && args[0] != `prof2` && args[0] != `prof3`)  {
            var title = `Error`;
            var des = `Incorrect arguments: \nProper save terms are 'prof1', 'prof2', or 'prof3'`;
            var embed = EmbedManager.DefaultEmbed(title, des, message, bot);
            message.channel.send(embed);
            return;
        }
        
        PlayerData.SetActiveProfile(member, args[0]);
        var title = `Profile Set`;
        var des = `Active profile set to '${args[0]}'~`;
        var embed = EmbedManager.DefaultEmbed(title, des, message, bot);
        message.channel.send(embed);

    }

    static Prof(member, message, bot, args) {
        var profile = PlayerData.GetActiveProfile(member);
        var title = `Current Profile`;
        var description = `Your current profile is "${profile}"~`;
        var embed = EmbedManager.DefaultEmbed(title, description, message, bot);
        message.channel.send(embed);
    }

    static Test(member, message, bot, args) {
        var asd = DataManager.FindPath(member);
        if (asd = true) {
            message.channel.send(`yes`);
        }
    }

}

module.exports = GameCommands;