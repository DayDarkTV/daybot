class AdminCommands {
    static Restart(message, bot) {
        message.channel.send(`Restarting. Please wait at least 5 seconds for my systems to come back online.`).then( sent => {
            
            console.log(message.author.username + " restarted the bot.")
            bot.destroy();
        });
    }
}

module.exports = AdminCommands;