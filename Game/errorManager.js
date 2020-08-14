const { Client, MessageEmbed } = require("discord.js");

class ErrorManager {

    static SaveError(message, error) {
        console.log(`a save error occured! [${error}]`)
        const embed = new MessageEmbed()
            .setTitle(`A save error occured!`)
            .setDescription(error)
            .setColor(0xff0000)
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`DayBot`, `https://cdn.discordapp.com/avatars/741725595360297074/2c671e0ac4c9798f70d5cfe9b5df0589.png?size=128`)
          
        message.channel.send(embed);
    }

}

module.exports = ErrorManager;