exports.run = async (client, message, args, level) => { 
const Discord = require("discord.js")
const feats = require("../feats.json")
if(args.join(" ") === "") {
      message.channel.send("To look up a class feature type `!classfeat Feat Name`.")
      return;
    }
    for (var i = 0; i < feats.length; i++) {
    if(feats[i].name.toLowerCase() === args.join(" ")) {
      let featEmbed = new Discord.RichEmbed()
      .setTitle(feats[i].name)
      .addField("Description", feats[i].description)
      
      message.channel.send(featEmbed);
      return;
    }
      }
    let posSpells = "";
    for (var i = 0; i < feats.length; i++) {
    if(feats[i].name.toLowerCase().includes(args.join(" "))) {
      posSpells = posSpells + "• " + feats[i].name + "\n"
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
  aliases: ["feat"],
  permLevel: "Peasant"
};

exports.help = {
  name: "feat",
  category: "D&D Commands",
  description: "Look up a feat!",
  usage: "feat <feat>"
};