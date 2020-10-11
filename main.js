const Discord = require('discord.js');
require('dotenv-flow').config();

const config = {
    token: process.env.TOKEN,
    owner: process.env.OWNER,
    prefix: process.env.PREFIX
};

const client = new Discord.Client();

const prefix = config.prefix;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('Bot is online');
    client.user.setActivity("!help | discord.gg/NkQCE68");
});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'togglemute')
        client.commands.get('togglemute').execute(message, args);
    else if(command == 'mute')
        client.commands.get('mute').execute(message, args);
    else if(command == 'unmute')
        client.commands.get('unmute').execute(message, args);
    else if(command == 'help')
        client.commands.get('help').execute(message, args);
    else if(command == 'servers')
        client.commands.get('servers').execute(message, args, client);
    else if(command == 'ping')
        client.commands.get('ping').execute(message, args);

});



client.login(config.token);