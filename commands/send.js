exports.run = async (client, message, args, level) => {
const params = message.content.split(/\s+/g);
function sendMsg(s, c, lol) {
    let uwu = client.guilds.find("id", s)
    let msg = uwu.channels.find("id", c)
    try {
    return msg.send(lol);
    } catch(err) {
      console.log("Error: " + err)
    }
}
    // TODO: Make this not a fucking mess
    let msgarray = params
    msgarray.shift()
    msgarray.shift()
    msgarray.shift()
    let msg = msgarray.join(" ")
    
    let newline = true
    while(newline) {
      if(msg.includes("/n")) msg = msg.replace("/n", "\n")
      else newline = false
    }
    
    sendMsg(args[0], args[1], msg);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["send"],
  permLevel: "My Husband" 
};

exports.help = {
  name: "send",
  category: "Admin Commands",
  description: "Shhhhhhhhhhhhhhhhhh",
  usage: "send I love you Inno"
};
