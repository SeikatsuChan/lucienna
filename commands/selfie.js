exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")
const selfies = require("../resources/selfies.json")

let randomSelfie = selfies[Math.floor(Math.random()*selfies.length)]

let selfieEmbed = new Discord.RichEmbed()
.setImage(randomSelfie)

message.channel.send(selfieEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["selfie"],
  permLevel: "Peasant"
};

exports.help = {
  name: "selfie",
  category: "Fun/Random Commands",
  description: "Get a random picture of the most beautiful girl you'll ever see.",
  usage: "selfie"
};