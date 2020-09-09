const discord = require('discord.js');

const client = new discord.Client();

const prefix = '-'

client.once('ready' , () => {
    console.log('bot is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }else if (command == 'hey'){
        message.channel.send('https://www.twitch.tv/faabserientje');
    }else if(command == 'coolekikker'){
        message.channel.send('https://i.pinimg.com/originals/d7/f6/c0/d7f6c018fdb13f14f21fe2e995a04279.jpg');
    }else if(command == ':('){
        message.channel.send('https://www.apa.org/images/sad-title-image_tcm7-179953.jpg')
    }
})

client.login('NzUyOTQyOTEzMzU2NDMxNjIz.X1e-uw.GHf5N5R-yHf-ld-OVAbzISUVYRc')