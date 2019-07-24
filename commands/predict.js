exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")
  if(!args[0]) return message.channel.send("I cannot answer a question which is not yet asked.")
  let question = args.join(" ")
  let responses = [
    "No doubt.",
    "Probably.",
    "Likely.",
    "Outlook.. not so good.",
    "Don't count on it.",
    "Are you serious?",
    "I think you already know the answer to this.",
    "You don't want to know.",
    "*Good question.*",
    "Absolutely.",
    "No chance.",
    "The fact that you had to ask concerns me almost as much as the question itself.",
    "*Laughs.*",
    "I sincerely *hope* not.",
    "I doubt it.",
    "I believe so, yes."
  ]
  let response = responses[Math.floor(Math.random()*responses.length)]
  
  let prediction = new Discord.RichEmbed()
  .addField(`${message.author.username} asked:`, question)
  .addField("Lucienna says:", response)
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  
  message.channel.send(prediction)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ask"],
  permLevel: "Peasant"
};

exports.help = {
  name: "predict",
  category: "Fun/Random Commands",
  description: "Allow me to tell your fate",
  usage: "predict [question]"
};