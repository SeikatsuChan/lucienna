const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
////////////////////////////////////////////////////////////////////
const config = require("./config.json");
const Discord = require("discord.js");
const XMLHttpRequest = require('xmlhttprequest');
const client = new Discord.Client();
const fs = require('fs');
const spells = require("./spells.json");

const Enmap = require('enmap');

client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});

const defaultSettings = {	
  prefix: "!"
}

client.on("guildDelete", guild => {
  client.settings.delete(guild.id);
});

client.on("ready", async => {
  console.log("Logged in! I'm in " + client.guilds.size + " guilds, serving " + client.users.size + " users!");
  client.user.setActivity(`Ricobri fucking die`, {type: "WATCHING"});
});

client.on("message", async (message) => {
  if(!message.guild || message.author.bot) return;
  
  const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
  
  if(message.content.indexOf(guildConf.prefix) !== 0 && !message.content.startsWith("yuki!")) return;

  const args = message.content.toLowerCase().split(/\s+/g);
  const command = args.shift().slice(guildConf.prefix.length).toLowerCase();
  
  // eval here maybe idk
  
  if(message.content === "luci!prefix") {
    let perms = false;
    if(message.author.id === "395268786913017857") {
      perms = true;
    }
    
    if(perms) {
      if (args.join(" ") === "") {
        message.channel.send("Please specify a prefix.")
        return;
      }
      let newprefix = args;
      client.settings.set(message.guild.id, newprefix, "prefix");
      message.channel.send("Done! My new prefix is " + newprefix)
    } else {
      return;
    }
  }
  
  if(command === "setprefix") {
    let perms = false;
    if(message.author.id === config.ownerID || message.author.id === message.guild.ownerID) {
      perms = true;
    }
    
    if(perms) {
      if (!args) {
        message.channel.send("Please give me a prefix!!!")
        return;
      }
      let newprefix = args[0];
      client.settings.set(message.guild.id, newprefix, "prefix");
      message.channel.send("Done! My new prefix is " + newprefix)
    } else {
      message.channel.send("Only the server owner can change my prefix.")
    }
  }
  
  if(command === "ping") {
    const m = await message.channel.send("OwO what's this?");
    m.edit(`Hello there beautiful! My ping is ${m.createdTimestamp - message.createdTimestamp}ms, and the API latency is ${Math.round(client.ping)}ms!`);
  }
  
  if(command === "spell") {
    if(args.join(" ") === "") {
      message.channel.send("To look up a spell type `!spell Spell Name`.")
      return;
    }
    for (var i = 0; i < spells.length; i++) {
    if(spells[i].name.toLowerCase() === args.join(" ")) {
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
      
      message.channel.send(spellEmbed);
      return;
      }
      } 
    }
    let posSpells = "";
    for (var i = 0; i < spells.length; i++) {
    if(spells[i].name.toLowerCase().includes(args.join(" "))) {
      posSpells = posSpells + "• " + spells[i].name + "\n"
    }
  }
  if(posSpells === "") {
    let errorEmbed = new Discord.RichEmbed()
    .setTitle("Spell not found...")
    .setDescription("Did you make a spelling error? If you aren't sure how to type the whole thing you can type a part of it you do know to search(i.e `!spell fire` to find Fireball). If you're positive it's correct, the spell may not have been added yet.")
    
    message.channel.send(errorEmbed)
    return;
  } else {
    let posSpellEmbed = new Discord.RichEmbed()
    .setTitle("Spell not found..")
    .setDescription("Did you mean one of these?\n\n" + posSpells)
    
    message.channel.send(posSpellEmbed)
    return;
  }
  }
  if(command === "chargen") {
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
      var sub = subs[Math.floor(Math.random() * subs.length)];
      if(sub === "High") {
        dex+=2
        int++
      } else if (sub === "Wood"){
        dex+=2
        wis++
      } else {
        dex+=2
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
  }
});
client.login(process.env.TOKEN);