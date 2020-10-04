module.exports = {

    name: 'togglemute',
    description: "Adds a reaction to the !togglemute command just sent that the user can react in order to mute or unmute all members in the voice channel the user is in",
    
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

        const collector = message.createReactionCollector(filter, { time: 2000000, dispose: true });

        collector.on('collect', (reaction, user) =>{

            let channel = message.member.voice.channel;

            if(channel == null)
                message.channel.send('Please join a voice channel');
            else{
                for(let member of channel.members)
                    member[1].voice.setMute(true);
            }

        });

        collector.on('remove', (reaction, user) =>{

            let channel = message.member.voice.channel;

            if(channel == null)
                message.channel.send('Please join a voice channel');
            else{
                for(let member of channel.members)
                    member[1].voice.setMute(false);
            }

        });

    }
}