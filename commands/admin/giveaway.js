const discord = require('discord.js'); 
const ms = require('ms'); 

module.exports = {
    commands: 'giveaway',
    callback: async (message, args, prefix, Client) => { 
    
        if(!args[0]) return message.channel.send(`**Wie lang soll das Giveaway gehen?**`)
        
        if(!args[0].endsWith("s")&&!args[0].endsWith("h")&&!args[0].endsWith("d")&&!args[0].endsWith("m")) return message.channel.send(`**Wie lang soll das Giveaway gehen?**`)
        
        if(isNaN(args[0][0])) return message.channel.send(`**Wie lang soll das Giveaway gehen?**`)
    
        let winnerCount = args[1]
        
        let prize = args.slice(3).join(" ")
        
        if(!args[1]) return message.channel.send(`**Wie viele Leute kรถnnen Gewinnen?**`)

        if(!args[2]) return message.channel.send(`Gibt es Irgendwelche Anforderungen?`)
        
        if(!args[3]) return message.channel.send(`**Was ist der Preis fรผr das Giveaway?**`)
        
        const anforderung = args[2]
        message.delete()
        
        var botEmbed = new discord.MessageEmbed()
         .setTitle("๐ **GIVEAWAY** ๐")
         .setDescription(`
         Reagiere mit ๐ um mitzumachen!!
         **Preis: **${prize}
         **Gewinner: **${winnerCount}
         **Anforderungen: **${anforderung}
         **Endet in : **${args[0]}
         **Giveaway Hosted By: **${message.author}`)
         .setTimestamp(`Ends on ${Date.now()+ms(args[0])}`)
         .setColor("#d98a23")
         
        const msg = await message.channel.send(botEmbed)
        
        msg.react('๐')
    
        setTimeout(function () {
    
            var random = 0;
            var winners = [];
            var inList = false;
        
            const peopleReacted = msg.reactions.cache.get("๐").users.cache.array();
    
            for (let i = 0; i < peopleReacted.length; i++) {
    
                if(peopleReacted[i].id == Client.user.id){
                    peopleReacted.splice(i,1);
                    continue;
                }
            }
    
            if(peopleReacted.length == 0) {
                const embed = new discord.MessageEmbed()
                 .setColor("#ff0000")
                 .setTitle("๐ **GIVEAWAY ENDS** ๐")
                 .setDescription(`**Es gibt keinen Gewinner da keiner Mitgemacht hat!**
                 
                  **Giveaway Hosted By: **${message.author}`)
                msg.edit(embed)
    
                return message.channel.send(`Es gibt keinen Gewinner da keiner Mitgemacht hat!! :(\n${msg.url}`)
            }
    
            if(peopleReacted.length < winnerCount) {
                const embed = new discord.MessageEmbed()
                 .setColor("#ff0000")
                 .setTitle("๐ **GIVEAWAY ENDS** ๐")
                 .setDescription(`Es gibt keinen Gewinner da keiner Mitgemacht hat!!
                 
                  **Giveaway Hosted By: **${message.author}`)
                msg.edit(embed)
    
                return message.channel.send(`Es gibt keinen Gewinner da keiner Mitgemacht hat!! :(\n${msg.url}`)
            }
    
            for (let y = 0; y < winnerCount; y++) {
    
                inList = false;
    
                random = Math.floor(Math.random() * peopleReacted.length);
    
                for (let o = 0; o < winners.length; o++) {
    
                    if(winners[o] == peopleReacted[random]){
                        inList = true;
                        y--;
                        break;
                    }
                }

                if(!inList){
                    winners.push(peopleReacted[random]);
                }
            }
    
            var response = ``
    
            for (let y = 0; y < winners.length; y++) {
    
                response += `${winners[y]}\n`
                
                const embed = new discord.MessageEmbed()
                 .setColor("#d98a23")
                 .setTitle("๐ **GIVEAWAY ENDS** ๐")
                 .setDescription(`---------------------------------
                 **${prize}**
                 **Gewinner:**
                 ${response}
                 **Giveaway Hosted By: ** ${message.author}`)
                msg.edit(embed) 
        
                message.channel.send(`**Herzlichen Glรผckwunsch:**\n${response}Du hast... **${prize}**.\n${msg.url} gewonnen! Melde dich so schnell wie mรถglich bei @๊งโฌโญ๐ฅ๐ฏ๐ฆ๐ฐ๐ฆโฌ๊ง per Dm um dein Geschenk zu erhalten!`) 
            }
            
        }, ms(args[0]));
    },
    permissions: 'ADMINISTRATOR',
}
