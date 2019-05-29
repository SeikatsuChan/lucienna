module.exports = (client, member) => {
    const settings = client.getSettings(member.guild.id);
  
    if (settings.farewellEnabled !== "true") return;
  
    const welcomeMessage = settings.farewellMessage.replace("{{user}}", member.user.tag);
  
    member.guild.channels.find(c => c.name === settings.welcomeChannel).send(welcomeMessage).catch(console.error);
  
    if (client.settings.has(member.id)) {
      client.settings.delete(member.id);
    }
  
  };