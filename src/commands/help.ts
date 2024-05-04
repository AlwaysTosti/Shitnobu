const mainHelpEmbed = {
    color: 0xFFC7BA,
    author: {
        name: 'Self-Help Center',
        iconURL: 'https://i.imgur.com/kigvue2.png'
    },
    description: 'Help yourself, moron.',
    fields: [
        {
            name: '\u200B',
            value: ' '
        },
        {
            name: 'Misc. Commands',
            value: '.help misc',
            inline: true
        },
        {
            name: 'Admin Commands',
            value: '.help admin',
            inline: true
        },
        {
            name: '\n',
            value: '\n'
        },
        {
            name: 'Fumo Commands',
            value: '.help fumo',
            inline: true
        },
        {
            name: 'XP Commands',
            value: '.help xp',
            inline: true
        }
    ]
}

export default {

    name: "help",
    aliases: [],
    execute(message, args){
        if((args?.length == 1) || undefined){
            message.reply({embeds: [mainHelpEmbed]})
            .then(repliedMessage => {
                setTimeout(() => repliedMessage.delete(), 20000)
            })
        }
    }

} satisfies Command