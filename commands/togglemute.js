module.exports = {

    name: 'togglemute',
    description: "Adds a reaction to the !togglemute command just sent that the user can react to in order to mute or unmute all members in the voice channel the user is in",
    
    execute(message, args){
        
        let muteperm = message.member.permissions.has("MUTE_MEMBERS");
        if(!muteperm){
            message.channel.send('You do not have permission to use this command');
            return;
        }



        message.react('🤐');

        const filter = (reaction, user) => {
            return reaction.emoji.name === '🤐' && user.id === message.author.id;
        };

        const collector = message.createReactionCollector(filter, { dispose: true });

        collector.on('collect', (reaction, user) =>{

            let muteperm2 = message.member.permissions.has("MUTE_MEMBERS");
            let channel = message.member.voice.channel;

            if(!muteperm2)
                message.channel.send('You do not have permission to use this command');
            else if(channel == null)
                message.channel.send('Please join a voice channel');
            else{
                for(const [memberID, member] of channel.members)
                    member.voice.setMute(true);
            }

        });

        collector.on('remove', (reaction, user) =>{

            let muteperm2 = message.member.permissions.has("MUTE_MEMBERS");
            let channel = message.member.voice.channel;

            if(!muteperm2)
                message.channel.send('You do not have permission to use this command');
            else if(channel == null)
                message.channel.send('Please join a voice channel');
            else{
                for(const [memberID, member] of channel.members)
                    member.voice.setMute(false);
            }

        });

    }
}