const { Client } = require('discord.js');

// Create a new Discord client
const client = new Client();

// Set the channel ID where the bot will listen
const channelId = '1239980701219291158';

// When the client is ready, run this code
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for messages
client.on('message', message => {
  // Check if the message is in the specified channel
  if (message.channel.id === channelId) {
    // Respond with "Pass" to every message
    message.channel.send('Pass');
  }
});

// Login to Discord with your app's token
client.login('MTIzOTk4MDI0OTM0MTQ5NzQ5NA.Geu4-r.KCkGFDA_VN35LFQ3bXfiCPpI7crYLrLfxqSg9M');
