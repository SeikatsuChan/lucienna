exports.run = (client, message, args, level) => {
const Discord = require("discord.js")
var races = [
      "Dragonborn",
      "Dwarf",
      "Elf",
      "Gnome",
      "Half Elf",
      "Half Orc",
      "Halfling",
      "Human",
      "Tiefling"
    ]
    var classes = [
      "Barbarian",
      "Bard",
      "Cleric",
      "Druid",
      "Fighter",
      "Monk",
      "Paladin",
      "Ranger",
      "Rogue",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ]
    var race = races[Math.floor(Math.random() * races.length)];
    var charClass = classes[Math.floor(Math.random() * classes.length)];
    var str = Math.floor(Math.random() * 20) + 1 
    var dex = Math.floor(Math.random() * 20) + 1
    var con = Math.floor(Math.random() * 20) + 1
    var int = Math.floor(Math.random() * 20) + 1
    var wis = Math.floor(Math.random() * 20) + 1
    var cha = Math.floor(Math.random() * 20) + 1
    
    if(race === "Elf") {
      var subs = [
        "High",
        "Wood",
        "Drow"
      ]
        dex+=2;
      var sub = subs[Math.floor(Math.random() * subs.length)];
      if(sub === "High") {
        int++
      } else if (sub === "Wood"){
        wis++
      } else {
        cha++
      }
    }
    if(race === "Dwarf") {
      var subs = [
        "Hill",
        "Mountain"
      ]
      var sub = subs[Math.floor(Math.random() * subs.length)];
      if(sub === "Hill") {
        con+=2
        wis++
      } else {
        con+=2
        str+=2
      }
    }
    if(race === "Half Elf") {
      cha+=2;
    }
    if(race === "Halfling") {
      dex+=2;
    }
    if(race === "Human") {
      
    }
    
    
    if(sub) {
      let charEmbed = new Discord.RichEmbed()
    .setTitle("__Random Character__")
    .setDescription(`**Race:** ${race}(${sub})\n**Class:** ${charClass}\n\n**Strength:** ${str}\n**Dexterity:** ${dex}\n**Constitution:** ${con}\n**Intelligence:** ${int}\n**Wisdom:** ${wis}\n**Charisma:** ${cha}`)
    
    message.channel.send(charEmbed);
    } else {
    let charEmbed = new Discord.RichEmbed()
    .setTitle("__Random Character__")
    .setDescription(`**Race:** ${race}\n**Class:** ${charClass}\n\n**Strength:** ${str}\n**Dexterity:** ${dex}\n**Constitution:** ${con}\n**Intelligence:** ${int}\n**Wisdom:** ${wis}\n**Charisma:** ${cha}`)
    
    message.channel.send(charEmbed);
    }
  
    function rollStat() {
      let i = 0
      let stat = [0, 0, 0, 0]
      while(i < 4) {
        stat[i] = Math.floor(Math.random()*6 + 1)
        i++
      }
      
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["randomcharacter"],
  permLevel: "Peasant"
};

exports.help = {
  name: "chargen",
  category: "D&D Commands",
  description: "Creates a random character for you, rolling all of the stats!",
  usage: "chargen"
};