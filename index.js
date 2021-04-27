const Discord = require('discord.js');

const bot = new Discord.Client();

const token = ''

bot.login(token)
bot.on('ready', () => {
    console.log('estou pronto para ser usado')
})

bot.on('message', msg => {
    if (msg.content === 'Eai') {
        msg.reply('Olá Bem Vindo')
}
    if (msg.content === 'eai') {
        msg.reply('Olá Bem Vindo')
}
    if (msg.content === 'ola') {
        msg.reply('Olá Bem Vindo')
}
    if (msg.content === 'olá') {
        msg.reply('Olá Bem Vindo')
}
    if (msg.content === 'td bem bote?'){
        msg.reply('sim e vc meu consagrado?')
}
    if (msg.content === 'tudo bem bote?'){
        msg.reply('sim e vc meu consagrado?')
}
})
