module.exports = {

    name: 'servers',
    description: "Displays how many servers the bot is in",

    execute(message, args,  client){
        message.channel.send("I am in " + client.guilds.cache.size + " servers");
    }
    
}