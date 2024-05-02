// Require the necessary discord.js classes and bot token
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { token } from '../config.json';

// Create a new client instance
const client = new Client({
	// Assign the client instance's intents (basically permissions)
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);


