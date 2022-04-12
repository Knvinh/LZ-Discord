const { Client, Intents, Collection, MessageEmbed } = require('discord.js');

const client = new Client(clientSettingsObject());

client.login("ODg1NTQ3MDM3NDEwNjE1MzM3.YTon8g.GylvESJMnRZAmgxTTW90ZVGAQ2g");

console.log(`HEUTE :: Logged in as ${client.user.tag}!`);

function clientSettingsObject() {
  return {
    shards: "auto",
    allowedMentions: {
      parse: ["roles", "users", /* "everyone" */],
      repliedUser: false, //set true if you want to ping the bot on reply messages
    },
    failIfNotExists: false,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [ 
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
}
}
