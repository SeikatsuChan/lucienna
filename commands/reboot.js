exports.run = async (client, message, args, level) => {
    await message.channel.send("*Yawns.* As you wish...");
    client.commands.forEach( async cmd => {
      await client.unloadCommand(cmd);
    });
    process.exit(1);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["reboot"],
    permLevel: "My Husband"
  };
  
  exports.help = {
    name: "reboot",
    category: "Admin Commands",
    description: "Entirely kills and restarts the bot.... Big scary",
    usage: "reboot"
  };