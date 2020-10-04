module.exports = {

    name: 'help',
    description: "Shows all commands",
    
    execute(message, args){

        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
            .setColor('c61111')
            .setTitle('BabyMungus Commands')
            .setDescription('Only users with the \'Mute Members\' permission are able to use these commands')
            .addFields(
                { name: '!mute', value: 'Mutes all members in the voice channel the user is in ' },
                { name: '!unmute', value: 'Unmutes all members in the voice channel the user is in ' },
                { name: '!togglemute', value: 'Adds a reaction to the !togglemute command just sent that the user can react to in order to mute or unmute all members in the voice channel the user is in' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Link to invite BabyMungus to your server', value: 'https://bit.ly/3iuwwGI' },
                { name: 'If you find any bugs or have any suggestions please feel free to join the Discord server at', value: 'https://discord.gg/NkQCE68' },
                { name: 'If you would like to help support the continuation of the bot you can visit', value: 'https://paypal.me/santiagopinto1 or search for @Santiago-Pinto on Venmo' },
            )

        message.channel.send(embed);

    }
}