const discord = require('discord.js')
const distube = require('distube')
const { commands } = require('../admin/lockdown')

module.exports = {
    commands: 'play',
    callback: async(client, message, args, prefix) => {
    if(!message.member.voice.channel) return message.reply('please join a vc before using this cmd')
    const music = args.join(" ")
    if(!music) return message.channel.send('please provide a song to play')
    client.distube.play(message, music)
    }
}
