module.exports = async client => {
  
  client.logger.log(`Logged in! Serving ${client.users.size} users in ${client.guilds.size} servers!`, "ready");
  client.user.setActivity(`your poor life decisions.`, {type: "WATCHING"});
};