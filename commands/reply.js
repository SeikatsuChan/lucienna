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
  // TODO: Make this not a fucking mess
  let msgarray = params
  msgarray.shift()
  msgarray.shift()
  let msg = msgarray.join(" ")
  
  // NOTE: This could probably be done better
  let newline = true
  while(newline) {
    if(msg.includes("/n")) msg = msg.replace("/n", "\n")
    else newline = false
  }
    await sendDM(args[0], msg)
    let receiver = client.users.get(args[0])
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