exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")

if(!args[0]) var num = 1
else if(args[0] > 26 || args[0] < 1) {
    return message.reply("You need to specify a number of megami between 1 and 26. `ex. ~megami 2`")
  }
else var num = args[0]

  let megami = [
    "Yurina-O",
    "Yurina-A",
    "Saine-O",
    "Saine-A",
    "Himika-O",
    "Himika-A",
    "Tokoyo-O",
    "Tokoyo-A",
    "Oboro-O",
    "Oboro-A",
    "Yukihi",
    "Shinra",
    "Hagane",
    "Chikage-O",
    "Chikage-A",
    "Kururu",
    "Thallya",
    "Raira",
    "Utsuro-O",
    "Utsuro-A",
    "Honoka",
    "Saine-A2",
    "Shinra-A2",
    "Kururu-A",
    "Korunu",
    "Yatsuha"
  ]
    let RandomMegami = randomMegami("");
    num--;
    while(num > 0) {
      RandomMegami = randomMegami(RandomMegami)
      num--;
    }
  let megamiEmbed = new Discord.RichEmbed()
  .setTitle("Your megami:")
  .setDescription(RandomMegami)
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setFooter("Slightly broken currently, will work on it soon.", `${client.users.get("395268786913017857").avatarURL}`)
  
  message.channel.send(megamiEmbed)
  
  function randomMegami(picked) {
    let megamiList = picked
    let newMegami = megami[Math.floor(Math.random()*megami.length)]
    if(picked.includes(newMegami)) randomMegami(megamiList)
    //else if(picked.includes(newMegami.substring(0, newMegami.length - 2)) + "-O" || picked.includes(newMegami.substring(0, newMegami.length - 2)) + "-A") randomMegami(megamiList)
    else return megamiList + "\n\n" + newMegami
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["megami"],
  permLevel: "Peasant"
};

exports.help = {
  name: "megami",
  category: "Sakura Arms Commands",
  description: "Allow me to choose your megami.",
  usage: "megami [number]"
};