const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('Bot is online');
    client.user.setActivity("!help | twitter.com/fablessb");
});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'mute')
        client.commands.get('mute').execute(message, args);
    else if(command == 'unmute')
        client.commands.get('unmute').execute(message, args);
    else if(command == 'togglemute')
        client.commands.get('togglemute').execute(message, args);
    else if(command == 'help')
        client.commands.get('help').execute(message, args);
    else if(command == 'ping')
        client.commands.get('ping').execute(message, args);
        
});



























client.login('NzYxNzQyMTc2MzI0NTUwNjk2.X3fBrw.msQ4tYV4V4-x909NMQhKHtXpBR0');