import { Message } from 'discord.js'

export default function(message: Message<boolean>) {

    const channel = message.channel;

    channel.send("pong");
    
}