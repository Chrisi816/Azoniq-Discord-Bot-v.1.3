// Copyright by κ§β¬β­π₯π―π¦π°π¦β¬κ§#0001 \\

const Discord = require ('discord.js')
module.exports = {
    name: 'Sugestion',
    commands: ['suggestion', 'vorschlag'],
    permissions: [],
    description: 'Erstelle eine Umfrage bzw. einen Vorschlag!',
    callback(message, args){
          const channel = message.guild.channels.cache.find(ch => ch.name === 'β βδΈ¨βππ ππππππ€', 'Umfragen');
          if(!channel) return message.channel.send('Umfragen/Vorschlag Channel existiert nicht! Erstelle mindestens ein Channel der "Umfragen" heiΓt!')
        
          let messageArgs = args.join(' ');
          const embed = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(messageArgs);

          channel.send(embed).then((msg) =>{
              msg.react('π');
              msg.react('π');
              message.delete();
          }).catch((err)=>{
              throw err;
          })
    }
}