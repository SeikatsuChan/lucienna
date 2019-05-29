exports.run = async (client, message, args, level) => { 
   if(message.author.id == 479380221137780756) {
      message.channel.send("Yes, Inno. I will marry you. <3")
    } else {
      message.channel.send("*Laughs.*\nOh, you're serious?")
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["iloveyou"],
  permLevel: "Peasant" 
};
exports.help = {
  name: "marryme",
  category: "Fun/Random Commands",
  description: "lol what?",
  usage: "marryme"
};