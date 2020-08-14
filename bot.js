const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const CommandHandler = require("./commandHandler.js");
var bot = client;
var prefix = "db";

client.on("ready", () => {
    console.log("I am ready!");
    bot.user.setPresence({ activity: { name: 'upgrades..' }, status: 'idle' })
        .then(console.log)
        .catch(console.error);
});
  
var tokenFile = "../token.txt";
fs.readFile(tokenFile, "utf8", (err, data) => {
      if (err) console.log(err);
      client.login(data);
});

client.on('message', function(message) {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");

    const member = message.member;
/*
    var isAdmin = Player.IsAdmin(member);
    var profiles = Player.GetProfiles(member, message);
    var activeProfile = Player.GetActiveProfile(member);
    var saveLoc = Player.GetSaveLocation(member, message);
    var isActive = Player.isActivated(member, bot);
*/
    var gameInfo = [/*isAdmin, profiles, activeProfile, saveLoc, isActive*/];
    
    setTimeout(function() {
        CommandHandler.Parse(message, args, bot, member, gameInfo);
        //console.log(gameInfo);
    }, 15); 

});