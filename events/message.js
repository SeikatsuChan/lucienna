const talkedRecently = new Set();
const utils = require("../utils.js");
const Discord = require("discord.js");

module.exports = async (client, message) => {
  if (message.author.bot) return;
  if(!message.guild) {
      if(message.author.id != 479380221137780756) {
      var Attachment = (message.attachments).array();
      if(Attachment.length > 0) {
      var dmEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator +  " ID: " + message.author.id, message.author.avatarURL)
      .setDescription(message.content)
      .setImage(Attachment[0])
      } else {
      var dmEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator +  " ID: " + message.author.id, message.author.avatarURL)
      .setDescription(message.content)
      }
      
      client.users.get("479380221137780756").send(dmEmbed);
      client.guilds.get("560148827437531137").channels.get("574418408020508672").send(dmEmbed);
      }
    }
  if(message.content.includes("<@560149661047062539>")) {
    let pingEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator +  " ID: " + message.author.id, message.author.avatarURL)
    .setDescription(message.content)
    .addField("Server", `${message.guild.name}(${message.guild.id})`, false)
    .addField("Channel", `#${message.channel.name}(${message.channel.id})`)
    .addField("Link", `[Jump to message](${message.url})`)
    
    client.users.get("479380221137780756").send(pingEmbed);
    client.guilds.get("560148827437531137").channels.get("574418408020508672").send(pingEmbed)
  }
  if(message.guild) {
   var settings = message.settings = client.getSettings(message.guild.id);
  } else {
    var settings = message.settings = client.getSettings(message.author.id);
  }
  
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
    return message.reply(`What? Oh, my prefix is \`${settings.prefix}\``);
  }
    if (message.content.indexOf(settings.prefix) !== 0 && message.guild) return;
  if(message.guild) {
    var args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  } else {
    var args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  }
  const command = args.shift().toLowerCase();
  
   if (talkedRecently.has(message.author.id)) 
  return message.reply("Slow down please!");
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 1000);
  
    if (message.guild && !message.member) await message.guild.fetchMember(message.author);
  
    const level = client.permlevel(message);
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd) return;

    if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("I'm not doing this for you in DMs... Try this in public.");
  
  
  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.systemNotice === "true") {
      return message.channel.send(`Hah! You can't use that command!
  Your permission level is ${level} (${client.config.permLevels.find(l => l.level === level).name})
  This command requires level ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
    } else {
      return;
    }
  }
  message.author.permLevel = level;
  message.flags = [];
 while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }
  client.logger.cmd(`[CMD] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
  cmd.run(client, message, args, level);

};