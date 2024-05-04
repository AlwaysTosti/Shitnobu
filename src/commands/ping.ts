export default {

    name: 'ping',
    aliases: [],
    execute(message, _args){
        message.reply('pong')
        .then(repliedMessage => {
            setTimeout(() => repliedMessage.delete(), 20000)
        })
    }

} satisfies Command