exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")
const settings = message.settings = client.getSettings(message.guild.id);
  
  let options = message.content.slice(settings.prefix.length + 6).split(",");
  let option = options[Math.floor(Math.random() * options.length)]
  let chooseEmbed = new Discord.RichEmbed()
  .setTitle(`I choose: ${option.trim()}!`)
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setDescription(`Options were: ${options}`)
  
  message.channel.send(chooseEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pick"],
  permLevel: "Peasant"
};

exports.help = {
  name: "choose",
  category: "Fun/Random Commands",
  description: "Let me make your decisions for you, because you obviously cannot be trusted to do it yourself.",
  usage: "choose <option 1>, <option 2>, ..."
};