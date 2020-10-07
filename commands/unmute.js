module.exports = {

    name: 'unmute',
    description: "Unmutes all members in the voice channel the user is in",
    
    execute(message, args){

        let channel = message.member.voice.channel;

        if(!message.member.permissions.has("MUTE_MEMBERS"))
            message.channel.send('You do not have permission to use this command');
        else if(channel == null)
            message.channel.send('Please join a voice channel');
        else{
            for(const [memberID, member] of channel.members)
                    member.voice.setMute(false);
        }

    }
}