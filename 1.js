const Discord = require("discord.js");
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;

    if (message.content === '==clubmusic') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
              const dispatcher = connection.playArbitraryInput('club.mp3');
              dispatcher.setVolume(1);
              message.reply('�뷡 ����!');
            })
            .catch(console.error);
        } else {
          message.reply('�����濡 ���� ����ϼ���!~');
          return;
        }
    }

client.login(token); 