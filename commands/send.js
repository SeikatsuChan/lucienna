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
    let i = 3
    let msg = ""
    while(i < params.length) {
      msg = msg + params[i] + " "
      i++;
    }
    sendMsg(params[1], params[2], msg);
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
