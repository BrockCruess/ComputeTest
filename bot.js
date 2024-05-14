const { Client } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

// Load environment variables from .env file
const envConfig = dotenv.parse(fs.readFileSync('.env'));
for (const k in envConfig) {
  process.env[k] = envConfig[k];
}

// Create a new Discord client
const client = new Client();

// When the client is ready, run this code
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for messages
client.on('message', message => {
  // Check if the message is in the specified channel
  if (message.channel.id === process.env.CHANNEL_ID) {
    // Respond with "Pass" to every message
    message.channel.send('Pass');
  }
});

// Login to Discord with your app's token
client.login(process.env.DISCORD_BOT_TOKEN);
