exports.run = async (client, message, args, level) => {
const params = message.content.split(/\s+/g);
  function sendDM(u, lol) {
    let msg = client.users.find("id", u) 
    try {
    return msg.send(lol);
    } catch(err) {
      console.log("Error: " + err)
    }
  }
    let i = 2
    let msg = ""
    while(i < params.length) {
      msg = msg + params[i] + " "
      i++;
    }
    await sendDM(params[1], msg)
    let receiver = client.users.get(params[1])
    client.users.get("479380221137780756").send(`**TO ${receiver.username}(${receiver.id}):** ${msg}`);
    client.guilds.get("560148827437531137").channels.get("574418408020508672").send(`**TO ${receiver.username}(${receiver.id}):** ${msg}`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dm"],
  permLevel: "My Husband" 
};
exports.help = {
  name: "reply",
  category: "Admin Commands",
  description: "Shhhhhhhhhhhhhhhhhh",
  usage: "reply <ID> I love you Inno"
};