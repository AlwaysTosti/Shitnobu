// Import the necessary discord.js classes.
import { Client, Events, GatewayIntentBits, Message } from 'discord.js';
// Import the bot token.
import { token } from '../config.json';
// Import fs from node so you can see the file system idk exactly what this is.
import fs from 'fs';

// Create a new client instance.
const client = new Client({
	// Assign the client instance's intents (basically permissions).
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

// When the client is ready, run this code one time.
client.once(Events.ClientReady, readyClient => {
	console.log(`${readyClient.user.tag} online.`);
});

// Log in to Discord with the bot token.
client.login(token);

// If a message is sent, 
client.on('messageCreate', (message) => {

	const content = message.content;
	const channel = message.channel;

	// check if it starts with a ".".
	if(content.toString().startsWith(".")){
		// If it does, make an array of the arguments (including the command itself),
		const args = content.split(" ");
		// and then run commandCheck, passing the arguments through.
		commandCheck(message, args);
	};

});


function commandCheck(message: Message<boolean>, args: string[]){
	const dir = './src/commands';

	fs.readdir(dir, (err, files) => {
		if(err){
			throw err;
		};

		files.forEach(async file => {
			if(file == "./commands/" + args[0].substring(1) + ".ts"){
				const commandFile = await import("./commands/" + file);
				const command = commandFile.default;
				command(message, args);
			};
		});
	});

};