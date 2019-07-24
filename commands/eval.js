exports.run = async (client, message, args, level) => { 
  const code = args.join(" ");
  try {
    const evaled = eval(code);
    const clean = await client.clean(client, evaled);
    message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
  }
  function purge(server) {
    client.guilds.find("name", server).leave()
  }
  function serverMap() {
    return message.channel.send(client.guilds.array().sort())
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eval"],
  permLevel: "My Husband"
};

exports.help = {
  name: "eval",
  category: "Admin Commands",
  description: "Big spooky command!!",
  usage: "don't"
};