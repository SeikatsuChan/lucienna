exports.run = async (client, message, args, level) => { 
  const msg = await message.channel.send("*Yawns*");
  msg.edit(`Oh, hey there! My ping is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permLevel: "Peasant" 
};
exports.help = {
  name: "ping",
  category: "Basic Commands",
  description: "Check if I'm alive!",
  usage: "ping"
};