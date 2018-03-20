const Discord = require("discord.js")
const settings = require("./settings.json")
const prefix = settings.prefix
const token = settings.token

const bot = new Discord.Client({disableEveryone: true})

console.log(token)



bot.on("ready", async () => {
	console.log('bot is ready')
	bot.generateInvite(["ADMINISTRATOR"]).then(link =>
		console.log(link))
	
})
bot.on('message', async message => {
	if (!message.guild) return

	let msg = message.content.split(" ")
	let command = msg[0]
	if (!command.startsWith(prefix)) return
		command = command.substr(3)
		console.log(command)
	if (command === "hehe")
		message.channel.send('heehee')
	if (command === "come"){
		message.member.voiceChannel.join().then(connection => {
			message.reply("Infiltration Complete.")
		})
		.catch(console.log)
	}
		else{
			message.reply("You need to join a voiceChannel first!")
		}
	if (command =="leave"){
		voiceChannel.leave()
	}
})

bot.login(token)
