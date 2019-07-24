exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")
let choice = args[0].toProperCase()
const rps = [
  "Rock",
  "Paper",
  "Scissors"
]
  if (!choice || !rps.includes(choice)) return message.channel.send("Choose rock, paper, or scissors. That's how this game works...")
  
  let GUN = Math.floor(Math.random()*100)
  let response = rps[Math.floor(Math.random()*3)]
  if(GUN == 1) {
    response = "GUN"
  }
  
  if((choice === "Rock" && response === "Scissors") || (choice === "Paper" && response === "Rock") || (choice === "Scissors" && response === "Paper")) {
    var outcome = "You win!"
    var color = "#008000"
  }
  if((choice === "Rock" && response === "Rock") || (choice === "Paper" && response === "Paper") || (choice === "Scissors" && response === "Scissors")) {
    var outcome = "Draw!"
    var color = "ffffff"
  }
  if((choice === "Rock" && response === "Paper") || (choice === "Paper" && response === "Scissors") || (choice === "Scissors" && response === "Rock") || response === "GUN") {
    var outcome = "You lose!"
    var color = "#a81f1f"
  }
  
  let rpsEmbed = new Discord.RichEmbed()
  .setTitle("I choose: " + response + "!")
  .setDescription(outcome)
  .setColor(color)
  
  message.channel.send(rpsEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rps"],
  permLevel: "Peasant"
};

exports.help = {
  name: "rps",
  category: "Fun/Random Commands",
  description: "Play a friendly game of rock paper scissors!",
  usage: "rps"
};