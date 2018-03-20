const Discord = require("discord.js")
const settings = require("./settings.json")
const prefix = settings.prefix
const token = settings.token
const ffmpeg = require("ffmpeg")
const opus = require("opusscript")
const fs = require('fs')
const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
	console.log('bot is ready')
	// bot.generateInvite(["ADMINISTRATOR"]).then(link =>
	// 	console.log(link))
	
})
bot.on('message', async message => {
	if (!message.guild) returnnod
	let msg = message.content.split(" ")
	let command = msg[0]
	if (!command.startsWith(prefix)) {
		return
	}
	command = command.substr(3)



	if (command === "ping") {
		message.channel.send('pong')
	}


	if (command === "disappear"){
		meme = "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f8/Shaco.joke.ogg"
		playSound(meme,message)
	}

	if (command === "jokes"){
		meme = "http://leagueoflegends.wikia.com/wiki/File:Shaco.attack3.ogg"
		playSound(meme,message)
	}

	if (command === "dawae"){
		meme = "./dawae.mp3"
		playSound(meme,message)
	}
	if (command === "scam"){
		meme = "./cam.mp3"
		playSound(meme,message)
	}
	if (command === "fun"){
		meme = "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bb/Shaco.attack2.ogg/revision/latest?cb=20121126233707"
		playSound(meme,message)
	}

	if (command === "magictrick"){
		meme = "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/55/Shaco_Select.ogg/revision/latest?cb=20121126233706"
		playSound(meme,message)
	}
	if (command === "backstab"){
		meme = "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/84/Shaco.attack1.ogg/revision/latest?cb=20121126233707"
		playSound(meme,message)
	}
	if (command === "nowyouseeme"){
		meme = "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c4/Shaco.attack6.ogg/revision/latest?cb=20121126233709"
		playSound(meme,message)
	}
	if (command === "hehe"){
		meme = "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/94/Shaco.laugh3.ogg/revision/latest?cb=20140205171942"
		playSound(meme,message)
	}
	if (command === "serious"){
		meme = "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/11/Shaco.taunt.ogg/revision/latest?cb=20121126233710"
		playSound(meme,message)
	}
	// if (command === "leave"){
	// 	message.guild.me.voiceChannel.leave()
	// }
})

bot.login(token)

function playSound(source,message){
	if (message.member.voiceChannel != null){
		message.member.voiceChannel.join().then(connection => {
			console.log("Infiltration Complete.")
			const dispatcher = connection.playArbitraryInput(source)
			dispatcher.on('end',() => {
				message.guild.me.voiceChannel.leave()
			})		
		})
		.catch(console.error)
	}
	else{
		message.reply("Get in a fucking channel")
	}
}