const { Client, MessageEmbed } = require("discord.js");

class EmbedManager {
    static DefaultEmbed(title, description, message, bot) {
        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`DayBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
            .setColor(0xff0000)
            .setTitle(title)
            .setDescription(description)
            
        return embed;
    }
}

module.exports = EmbedManager;