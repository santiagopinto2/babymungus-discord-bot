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
                { name: '!mute', value: 'Mutes all members in the voice channel the user is in '},
                { name: '!unmute', value: 'Unmutes all members in the voice channel the user is in '},
                { name: '!togglemute', value: 'Adds a reaction to the !togglemute command just sent that the user can react in order to mute or unmute all members in the voice channel the user is in'},
            )

        message.channel.send(embed);

    }
}