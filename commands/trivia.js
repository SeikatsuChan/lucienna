exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")
const trivia = require("../resources/trivia.json");
  if(args[0] && parseInt(args[0], 10) <= trivia.length) {
    var fact = parseInt(args[0], 10) - 1
  } else {
    var fact = Math.floor(Math.random()*trivia.length)
  }
  
  let triviaEmbed = new Discord.RichEmbed()
  .setTitle(`Pento fact #${trivia[fact].id}`)
  .setDescription(trivia[fact].content)
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  
  message.channel.send(triviaEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pentotrivia"],
  permLevel: "Peasant"
};

exports.help = {
  name: "trivia",
  category: "Fun/Random Commands",
  description: "Get a fun fact about Pento and its inhabitants.",
  usage: "trivia"
};