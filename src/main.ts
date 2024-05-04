// Import the necessary discord.js classes.
import { Client, Events, GatewayIntentBits, Message } from 'discord.js'
// Import the bot token.
import { token } from '../config.json'
// Import fs from node so you can see the file system idk exactly what this is.
import fs from 'fs'

// Create a new client instance.
const client = new Client({
	// Assign the client instance's intents (basically permissions).
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
})

// When the client is ready, run this code one time.
client.once(Events.ClientReady, readyClient => {
	console.log(`${readyClient.user.tag} is online.`)
})

// Log in to Discord with the bot token.
client.login(token)

// Load all command objects in the commands subfolder into an array.
const dir = './src/commands'
const commandArray: Command[] = []

fs.readdir(dir, (_err, files) => {
	files.forEach(async file => {
		const commandFile = await import('./commands/'+ file)
		commandArray.push(commandFile.default)
	})
})

// If a message is sent, 
client.on('messageCreate', (message) => {

	const content = message.content

	// check if it starts with a ".".
	if(content.toString().startsWith('.')){
		// If it does, make an array of the arguments (including the command itself),
		const args: string[] = content.split(' ')
		// and then run commandCheck, passing the arguments through.
		commandCheck(message, args)
	}

})

async function commandCheck(message: Message, args: string[]){
	for(let i = 0; i < commandArray.length; i++){
		if(args[0].substring(1) == commandArray[i].name){
			commandArray[i].execute(message, args)
		}
	}
}