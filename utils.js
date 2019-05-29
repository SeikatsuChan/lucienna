const Discord = require("discord.js");
module.exports.error0 = (arg) => {
  const error0embed = new Discord.RichEmbed()
  .setTitle("Error 1")
  .addField('Error at: ' + '```' + `args[${arg}]` + '```', `No Argument (args[${arg}]) delievered, please retry.`)
  .setColor('#FF0000');
  return error0embed;
}

module.exports.error1 = (arg) => {

  const error1embed = new Discord.RichEmbed()
  .setTitle('Error 2')
  .addField('Error at: ' + '```' + `args[${arg}]` + '```', `Argument (args[${arg}]) is [NaN](https://en.wikipedia.org/wiki/NaN), please retry.`)
  .setColor('#FF0000');
  return error1embed;

}

module.exports.error2 = (input) => {

  const error2embed = new Discord.RichEmbed()
  .setTitle('Error 3')
  .addField('Error at: ' + '```' + 'client.commands.get(command)' + '```', 'Command ' +'```' + input + '```' + ' does not exist.')
  .setColor('#FF0000');
  return error2embed;

}

module.exports.error3 = (input, input2) => {

  const error3embed = new Discord.RichEmbed()
  .setTitle('Error 4')
  .addField('Error at: ' + '```' + `${input2}` + ' < ' + `arg[${input}]` + '```', 'Arguments value was too low.')
  .setColor('#FF0000');
  return error3embed;

}

module.exports.error4 = (input, input2) => {

  const error4embed = new Discord.RichEmbed()
  .setTitle('Error 5')
  .addField('Error at: ' + '```' + `${input2} > arg[${input}].max` + '```', 'Arguments value got exceeded.')
  .setColor('#FF0000');
  return error4embed;

}

module.exports.error5 = (perm) => {

  const error5embed = new Discord.RichEmbed()
  .setTitle('Error 6')
  .addField('Error at: ' + '```' + `message.guild.members.find(client).hasPermission(${perm})` + '```', 'Missing permission: ' + '```' +perm + '```')
  .setColor('#FF0000');
  return error5embed;

}

module.exports.error6 = (role) => {

  const error6embed = new Discord.RichEmbed()
  .setTitle('Error 7')
  .addField('Error at: ' + '```' + `message.member.roles.has(${role})` + '```', 'Missing Role: ' + '```' +role + '```')
  .setColor('#FF0000');
  return error6embed;

}

module.exports.error7 = () => {

  const error7embed = new Discord.RichEmbed()
  .setTitle('Error 8')
  .addField('Error at: ' + '```' + `message.mentions.members.first()` + '```', 'Missing Mentioning.')
  .setColor('#FF0000');
  return error7embed;

}

module.exports.error8 = () => {

  const error8embed = new Discord.RichEmbed()
  .setTitle('Error 9')
  .addField('Error at: ' + '```' + `args[0] == args[1]` + '```', 'Argument 0 and 1 shall not be same.')
  .setColor('#FF0000');
  return error8embed;

}

module.exports.error9 = (arg) => {

  const error9embed = new Discord.RichEmbed()
  .setTitle('Error 10')
  .addField('Error at: ' + '```' + `args[${arg}] < 0` + '```', 'Argument shall not be negative.')
  .setColor('#FF0000');
  return error9embed;

}

module.exports.error10 = () => {

  const error10embed = new Discord.RichEmbed()
  .setTitle('Error 11')
  .addField('Error at: ' + '```' + `message.channel.nsfw == false` + '```', 'Channel is not a NSFW channel.')
  .setColor('#FF0000');
  return error10embed;

}