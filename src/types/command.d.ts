import { Message } from 'discord.js';

declare global {

    interface Command {
        name: string;
        aliases: string[];
        execute(message: Message, args: string[] = []): void;
    };

};