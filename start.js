const Discord = require("discord.js")
const settings = require("./settings.json")
const prefix = settings.prefix
const token = settings.token
const ffmpeg = require("ffmpeg")
const opus = require("opusscript")
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



	if (command === "hehe") {
		message.channel.send('heehee')
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
		meme = "http://leagueoflegends.wikia.com/wiki/File:Shaco.attack3.ogg"
		playSound(meme,message)
	}
	if (command === "scam"){
		meme = "http://leagueoflegends.wikia.com/wiki/File:Shaco.attack3.ogg"
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