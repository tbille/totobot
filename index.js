const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS
] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content.includes('alex')) {
    message.channel.send('Alex je t\'aime');
  }
  if (message.content.includes('will')) {
    message.channel.send('Will je t\'aime');
  }
  if (message.content.includes('bat')) {
    message.channel.send('Bat je t\'aime');
  }
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
    if (oldMember.user.username === 'GOURAAAAG') {
        client.guilds.cache.forEach((guild) => {
            if (guild.id === "689547169749008431") {
                let toto = guild.members.cache.get("240757416113864705");
                toto.setNickname("fan 2 " + newMember.nickname);
            }
        });
    }
});

client.login(process.env.DISCORD_TOKEN);