const {Client, MessageEmbed} = require('discord.js');

class DepugCommands {

    static Ping(message) {
        message.channel.send('Pinging...').then(sent => {
            var ping = sent.createdTimestamp - message.createdTimestamp;
            sent.edit(`Pong! Took ${ping}ms`);
        });
    }

    static UpTime(message, bot) {
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        var botUp = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        message.channel.send(`My current uptime is ${botUp}`);
    }

    static Testing(message) {
        const embed = new MessageEmbed()
          .setTitle('Testu~')
          .setColor(0xff0000)
          .setDescription('testing command~')
          .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
          .setAuthor(`DayBot`, `https://cdn.discordapp.com/avatars/741725595360297074/2c671e0ac4c9798f70d5cfe9b5df0589.png?size=128`)
          .setDescription(`♥`)
          .addField(`♥`, `{health}`, true)
          .addField(`⚔️`, `{attack}`, true)
          .addField(`🛡️`, `{defence}`, true)
          .addField(`✨`, `{level}`, true)
          
        message.channel.send(embed);
    }

    static Help(message, bot) {
        const embed = new MessageEmbed()
            .setTitle(`Current Commands List`)
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`DayBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
            .setColor(0xff0000)
            .setDescription(`dbhelp - Lists the current commands~ \ndbping - Gets my ping~ \ndbuptime - Tells you how long I have been running~ \n\n`)


        message.channel.send(embed);
    }

}

/*

        message.channel.send(`${message.author}`);
        message.channel.send(`${message.guild.name}`);
        message.channel.send(`${message.guild.description}`);
        message.channel.send(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`);
*/

module.exports = DepugCommands;