exports.run = async (client, message, args, level) => { 
const Discord = require('discord.js')
  if(!args[0]) var map = "pento" // Temporary, until more are added.
  else var map = args[0].toLowerCase()
  
  if(map === "pento") var img = "https://cdn.discordapp.com/attachments/517517926761234452/544269103012249630/Pento.png"
  else if(map === "amitio") var img = "https://cdn.discordapp.com/attachments/542780886274277416/598972473480052747/Amitio.png"
  else img = "error"
  
  if(img === "error") {
    let errorEmbed = new Discord.RichEmbed()
    .setTitle("Map not found...")
    .setDescription("Make sure it's spelled correctly? If it is, it may not have been added.")
    
    return message.channel.send(errorEmbed)
  }
  let mapEmbed = new Discord.RichEmbed()
  .setTitle(map.toProperCase())
  .setImage(img)
  
  message.channel.send(mapEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["region"],
  permLevel: "Peasant" 
};
exports.help = {
  name: "map",
  category: "D&D Commands",
  description: "See the map of a region",
  usage: "map [map name]"
};