exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")
const settings = message.settings = client.getSettings(message.guild.id);
  
  let options = args.join(" ").split(", ");
  let s = "";
  let a = "";
  let b = "";
  let c = "";
  let d = "";
  let i = 0;
  while (i < options.length) {
    let rating = Math.floor(Math.random()*100)
    if(rating >= 90 && s !== "") s = `${s} -> ${options[i]}`
    else if(rating >= 90 && s === "") s = `${s} ${options[i]}`
    else if(rating >= 65 && a !== "") a = `${a} -> ${options[i]}`
    else if(rating >= 65 && a === "") a = `${a} ${options[i]}`
    else if(rating >= 35 && b !== "") b = `${b} -> ${options[i]}`
    else if(rating >= 35 && b === "") b = `${b} ${options[i]}`
    else if(rating >= 10 && c !== "") c = `${c} -> ${options[i]}`
    else if(rating >= 10 && c === "") c = `${c} ${options[i]}`
    else if(d !== "") d = `${d} -> ${options[i]}`
    else if(d === "") d = `${d} ${options[i]}`
    i++;
  }
  
  let tierList = new Discord.RichEmbed()
  .setTitle("The __official__ tier list is:")
  .setDescription(`**S:**${s}\n\n**A:**${a}\n\n**B:**${b}\n\n**C:**${c}\n\n**D:**${d}`)
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  
  message.channel.send(tierList)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tier", "tiers"],
  permLevel: "Peasant"
};

exports.help = {
  name: "tierlist",
  category: "Fun/Random Commands",
  description: "Tier things for you with my superior taste.",
  usage: "tierlist <option 1>, <option 2>, ..."
};