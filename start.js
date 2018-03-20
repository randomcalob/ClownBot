const Discord = require("discord.js")
const settings = require("./settings.json")
const prefix = settings.prefix
const token = settings.token

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
	console.log('bot is ready')
	// bot.generateInvite(["ADMINISTRATOR"]).then(link =>
	// 	console.log(link))
	
})
bot.on('message', async message => {
	if (!message.guild) return
	let msg = message.content.split(" ")
	let command = msg[0]
	if (!command.startsWith(prefix)) {
		return
	}
	command = command.substr(3)



	if (command === "hehe") {
		message.channel.send('heehee')
	}



	if (command === "come"){
		if (message.member.voiceChannel.joinable){
			
		// 	console.log("let's goooooo")
		// 	message.member.voiceChannel.join().then(connection => {
		// 		message.reply("Infiltration Complete.")

		// })
		// .catch(console.error)
		}
		else{
			message.reply("Get in a fucking channel")
		}
	}



	// if (command === "leave"){
	// 	message.guild.me.voiceChannel.leave()
	// }
})

bot.login(token)
