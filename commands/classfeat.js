exports.run = async (client, message, args, level) => { 
const Discord = require("discord.js")
const cfeats = require("../classfeats.json")
if(args.join(" ") === "") {
      message.channel.send("To look up a class feature type `!classfeat Feat Name`.")
      return;
    }
    for (var i = 0; i < cfeats.length; i++) {
    if(cfeats[i].name.toLowerCase() === args.join(" ")) {
      let featEmbed = new Discord.RichEmbed()
      .setTitle(cfeats[i].name)
      .addField("Description", cfeats[i].description)
      
      message.channel.send(featEmbed);
      return;
    }
      }
    let posSpells = "";
    for (var i = 0; i < cfeats.length; i++) {
    if(cfeats[i].name.toLowerCase().includes(args.join(" "))) {
      posSpells = posSpells + "• " + cfeats[i].name + "\n"
    }
  }
  if(posSpells === "") {
    let errorEmbed = new Discord.RichEmbed()
    .setTitle("Feat not found...")
    .setDescription("Did you make a spelling error? If you aren't sure how to type the whole thing you can type a part of it you do know to search(i.e `!spell fire` to find Fireball). If you're positive it's correct, the spell may not have been added yet.")
    
    message.channel.send(errorEmbed)
    return;
  } else {
    let posSpellEmbed = new Discord.RichEmbed()
    .setTitle("Feat not found..")
    .setDescription("Did you mean one of these?\n\n" + posSpells)
    
    message.channel.send(posSpellEmbed)
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cfeat"],
  permLevel: "Peasant"
};

exports.help = {
  name: "classfeat",
  category: "D&D Commands",
  description: "Look up a class feature!",
  usage: "classfeat <feat>"
};