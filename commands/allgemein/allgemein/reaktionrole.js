const discord = require('discord.js')

module.exports = {
    commands: 'reaktionrole',
    callback: async (message, client) => {
        const embed = new discord.MessageEmbed()
        .setTitle('Social Media Pings ')
        .setDescription(`
        đ˘ Du wirst fĂźr alles was unten Folgt Gepingt \n\n
        đą Du wirst bei neuen Twitter Posts von vAzoniq gepingt \n\n 
        đŹ Bei neuen Streams wirst du immer gepingt đ \n\n
        đŽ Du willst bei Turnieren dabei sein? Dann reagier am besten! \n\n
        â Bekommst Random Pings :D \n\n
        `)
        .setColor('GREEN')

        const msg = await message.channel.send(embed)
        await msg.react("đ˘")
        await msg.react("đą")
        await msg.react("đŹ")
        await msg.react("đŽ")
        await msg.react("â")
    }
}