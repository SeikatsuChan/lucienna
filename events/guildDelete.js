module.exports = (client, guild) => {
    client.logger.cmd(`[GUILD LEAVE] ${guild.name} (${guild.id}) removed the bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`);
  };