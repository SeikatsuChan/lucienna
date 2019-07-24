exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")
  console.log(client.user.id)
  if(!message.guild.members.get("560149661047062539").permissions.has("MANAGE_CHANNELS")) return message.reply("I can't edit channels here.")
  if(args[0].toLowerCase() === "all") {
    message.guild.channels.forEach(function(chat) {
      let name = chat.name
      while (name.includes("-")) {
      name = name.replace("-", "\u2009")
      }
      chat.setName(name)
    });
  } else {
      let name = message.channel.name
      while (name.includes("-")) {
        name = name.replace("-", "\u2009")
      }
    await message.channel.setName(name)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["channeltrim"],
  permLevel: "Administrator"
};

exports.help = {
  name: "channeltrim",
  category: "Utility Commands",
  description: "Get rid of those annoying \"-\"s in your channel name",
  usage: "channeltrim"
};