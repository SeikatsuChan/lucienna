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
    "Saine-A1",
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
    "Kururu-O",
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
  
    let RandomMegami = megami[Math.floor(Math.random(megami.length))]
    megami.splice(megami.indexOf(RandomMegami), 1)
    num--;
    while(num > 0) {
      RandomMegami = RandomMegami + "\n" + megami[Math.floor(Math.random(megami.length))]
      megami.splice(megami.indexOf(RandomMegami), 1)
      num--;
    }
  let megamiEmbed = new Discord.RichEmbed()
  .setTitle("Your megami:")
  .setDescription(RandomMegami)
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setFooter("Slightly broken currently, will work on it soon.", `${client.users.get("395268786913017857").avatarURL}`)
  
  message.channel.send(megamiEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["megamitwo"],
  permLevel: "Peasant"
};

exports.help = {
  name: "megamitwo",
  category: "Sakura Arms Commands",
  description: "Allow me to choose your megami.",
  usage: "megami [number]"
};