import { Message } from 'discord.js'

export default {

    name: 'ping',
    aliases: [],
    execute(message: Message){
        message.reply('pong');
    }

} satisfies Command;