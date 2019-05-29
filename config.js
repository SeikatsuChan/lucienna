const config = {
  "ownerID": "395268786913017857",
  "admins": ["479380221137780756"],
  "support": [],
  "defaultSettings" : {
    "prefix": "~",
    "modRole": "Moderator",
    "adminRole": "Administrator",
    "systemNotice": "true", 
    "welcomeChannel": "welcome",
    "welcomeMessage": "Welcome {{user}}!",
    "farewellMessage": "Farewell {{user}}...",
    "farewellEnabled": "false",
    "welcomeEnabled": "false"
  },
  permLevels: [
    { level: 1,
      name: "Peasant", 
      check: () => true
    },

    { level: 2,
      name: "Moderator",
      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    { level: 3,
      name: "Administrator",
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id));
        } catch (e) {
          return false;
        }
      }
    },
    { level: 4,
      name: "Server Owner", 
      check: (message) => message.channel.type === "text" ? (message.guild.ownerID === message.author.id ? true : false) : false
    },

    { level: 8,
      name: "Bot Support",
      check: (message) => config.support.includes(message.author.id)
    },

    { level: 9,
      name: "My Husband",
      check: (message) => config.admins.includes(message.author.id)
    },

 
    { level: 10,
      name: "God", 
      check: (message) => message.client.config.ownerID === message.author.id
    }
  ]
};

module.exports = config;