module.exports = {

    name: 'servers',
    description: "Displays how many servers the bot is in",

    execute(message, args,  servers){
        message.channel.send(`I am in ${servers} servers`);
    }
    
}
