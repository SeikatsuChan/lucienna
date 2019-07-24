exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")
const spells = require("../resources/spells.json");
  
if(args.join(" ") === "") {
      message.channel.send("To look up a spell type `~spell Spell Name`.")
      return;
    }
    for (var i = 0; i < spells.length; i++) {
    if(spells[i].name.toLowerCase() === args.join(" ").toLowerCase()) {
      let embColor = ""
      if(spells[i].level.toLowerCase().includes("conjuration")) {
        embColor = "#0080ff"
      } else if(spells[i].level.toLowerCase().includes("abjuration")) {
        embColor = "#c0c0c0"
      } else if(spells[i].level.toLowerCase().includes("divination")) {
        embColor = "#f8f8f8"
      } else if(spells[i].level.toLowerCase().includes("enchantment")) {
        embColor = "#ff80ff"
      } else if(spells[i].level.toLowerCase().includes("evocation")) {
        embColor = "#ff0000"
      } else if(spells[i].level.toLowerCase().includes("illusion")) {
        embColor = "#b468ff"
      } else if(spells[i].level.toLowerCase().includes("necromancy")) {
        embColor = "#050505"
      } else if(spells[i].level.toLowerCase().includes("transmutation")) {
        embColor = "#00ff40"
      } 
      if(spells[i].length <= 1024) {
      if(spells[i].ahl) {
      let spellEmbed = new Discord.RichEmbed()
      .setTitle(spells[i].name)
      .setDescription(`*${spells[i].level} (${spells[i].class})*`)
      .addField("Casting Time", spells[i].time, true)
      .addField("Range", `${spells[i].range}\n`, true)
      .addField("Components", spells[i].components, true)
      .addField("Duration", spells[i].duration, true)
      .addField("Description", spells[i].description)
      .addField("At Higher Levels", spells[i].ahl)
      .setColor(embColor)
      
      message.channel.send(spellEmbed);
      return;
      } else {
      let spellEmbed = new Discord.RichEmbed()
      .setTitle(spells[i].name)
      .setDescription(`*${spells[i].level} (${spells[i].class})*`)
      .addField("Casting Time", spells[i].time, true)
      .addField("Range", `${spells[i].range}\n`, true)
      .addField("Components", spells[i].components, true)
      .addField("Duration", spells[i].duration, true)
      .addField("Description", spells[i].description)
      .setColor(embColor)
      
      message.channel.send(spellEmbed);
      return;
      }
    }
      // LONGER SPELLS
      else {
      if(spells[i].ahl) {
      let spellEmbed = new Discord.RichEmbed()
      .setTitle(spells[i].name)
      .setDescription(`*${spells[i].level} (${spells[i].class})*`)
      .addField("Casting Time", spells[i].time, true)
      .addField("Range", `${spells[i].range}\n`, true)
      .addField("Components", spells[i].components, true)
      .addField("Duration", spells[i].duration, true)
      .addField("Description", spells[i].description.slice(0, 1024))
      .addField("At Higher Levels", spells[i].ahl)
      .setColor(embColor)
      
      let extraEmbed = new Discord.RichEmbed()
      .setDescription(spells[i].description.slice(1024, spells[i].description.length))
      .setColor(embColor)
      
      await message.channel.send(spellEmbed);
      message.channel.send(extraEmbed)
      return;
      } else {
      let spellEmbed = new Discord.RichEmbed()
      .setTitle(spells[i].name)
      .setDescription(`*${spells[i].level} (${spells[i].class})*`)
      .addField("Casting Time", spells[i].time, true)
      .addField("Range", `${spells[i].range}\n`, true)
      .addField("Components", spells[i].components, true)
      .addField("Duration", spells[i].duration, true)
      .addField("Description", spells[i].description.slice(0, 1024))
      .setColor(embColor)
      
      let extraEmbed = new Discord.RichEmbed()
      .setDescription(spells[i].description.slice(1024, spells[i].description.length))
      .setColor(embColor)
      
      await message.channel.send(spellEmbed);
      message.channel.send(extraEmbed)
      return;
      }
      }
      } 
    }
    let posSpells = "";
    let numSpells = 0;
    for (var i = 0; i < spells.length; i++) {
    if(spells[i].name.toLowerCase().includes(args.join(" "))) {
      posSpells = posSpells + "• " + spells[i].name + "\n";
      numSpells++;
    }
  }
  if(posSpells === "") {
    let errorEmbed = new Discord.RichEmbed()
    .setTitle("Spell not found...")
    .setDescription("Did you make a spelling error? If you aren't sure how to type the whole thing you can type a part of it you do know to search(i.e `~spell fire` to find Fireball). If you're positive it's correct, the spell may not have been added yet.")
    
    message.channel.send(errorEmbed)
    return;
  } else if (numSpells == 1) {
      for (var i = 0; i < spells.length; i++) {
        if(spells[i].name.toLowerCase().includes(args.join(" "))) {
          let embColor = ""
      if(spells[i].level.toLowerCase().includes("conjuration")) {
        embColor = "#0080ff"
      } else if(spells[i].level.toLowerCase().includes("abjuration")) {
        embColor = "#c0c0c0"
      } else if(spells[i].level.toLowerCase().includes("divination")) {
        embColor = "#f8f8f8"
      } else if(spells[i].level.toLowerCase().includes("enchantment")) {
        embColor = "#ff80ff"
      } else if(spells[i].level.toLowerCase().includes("evocation")) {
        embColor = "#ff0000"
      } else if(spells[i].level.toLowerCase().includes("illusion")) {
        embColor = "#b468ff"
      } else if(spells[i].level.toLowerCase().includes("necromancy")) {
        embColor = "#050505"
      } else if(spells[i].level.toLowerCase().includes("transmutation")) {
        embColor = "#00ff40"
      } 
          if(spells[i].ahl) {
            let spellEmbed = new Discord.RichEmbed()
            .setTitle(spells[i].name)
            .setDescription(`*${spells[i].level} (${spells[i].class})*`)
            .addField("Casting Time", spells[i].time, true)
            .addField("Range", `${spells[i].range}\n`, true)
            .addField("Components", spells[i].components, true)
            .addField("Duration", spells[i].duration, true)
            .addField("Description", spells[i].description)
            .addField("At Higher Levels", spells[i].ahl)
            .setColor(embColor)
      
            message.channel.send(spellEmbed);
            return;
        } else {
          let spellEmbed = new Discord.RichEmbed()
          .setTitle(spells[i].name)
          .setDescription(`*${spells[i].level} (${spells[i].class})*`)
          .addField("Casting Time", spells[i].time, true)
          .addField("Range", `${spells[i].range}\n`, true)
          .addField("Components", spells[i].components, true)
          .addField("Duration", spells[i].duration, true)
          .addField("Description", spells[i].description)
          .setColor(embColor)
      
          message.channel.send(spellEmbed);
          return;
          }
      }
    }
  }
    else {
    let posSpellEmbed = new Discord.RichEmbed()
    .setTitle("Spell not found..")
    .setDescription("Did you mean one of these?\n\n" + posSpells)
    
    message.channel.send(posSpellEmbed)
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["spell"],
  permLevel: "Peasant" 
};
exports.help = {
  name: "spell",
  category: "D&D Commands",
  description: "Look up a spell!",
  usage: "spell <spell>"
};