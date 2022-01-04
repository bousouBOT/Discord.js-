// Discord.jsモジュールを読み込む
const Discord = require('discord.js');
// 新しいDiscordクライアントを作成
const client = new Discord.Client();
const prefix = 't'

//起動時にログに通知
client.once('ready', () => {
	console.log('正常に起動しました');
});

//起動時に特定のチャンネルにメッセージ
client.on('ready', () => {
client.channels.cache.get('チャンネルID').send('起動しました')
})

//コマンド
client.on("message", async message => {
  if (message.content === `${prefix}ping`) {
    message.channel.send('pong!')
  }})

client.login('トークン');//トークン普通に見られる
           or
client.login(process.env.TOKEN);//鍵マークのところのやつ