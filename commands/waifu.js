exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")
  
  if(message.mentions.users.first()) var waifu = message.mentions.users.first().username
  else var waifu = args.join(" ");
  let rating = Math.floor(Math.random()*100 + 1);
  if(rating >= 70) var color = "00ff00"
  else if(rating >= 40) var color = "ffff00"
  else var color = "ff0000"
  
  rating = rating + "%"
  
  if(waifu.toLowerCase() === "lucienna" || waifu === "<@560149661047062539>") {
    return message.channel.send("In your dreams...");
  }
  if(waifu.toLowerCase() === "inno" || waifu === "<@479380221137780756>") {
    rating = "101%"
  }
  if(waifu.toLowerCase() === "scarlet") {
    return message.channel.send("Don't you dare.");
  }

  let wifeEmbed = new Discord.RichEmbed()
  .setTitle(waifu)
  .setDescription(`Waifu material: **${rating}**`)
  .setColor(color)
  
  message.channel.send(wifeEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ratewaifu"],
  permLevel: "Peasant"
};

exports.help = {
  name: "waifu",
  category: "Fun/Random Commands",
  description: "Have me rate your waifus, because I have superior taste.",
  usage: "waifu <waifu>"
};