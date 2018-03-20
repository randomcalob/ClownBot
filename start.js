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
	console.log(message.content)
	if (message.content === '<@&390981978989658124> has big gae'){
		message.channel.send('yes')
	}

	let msg = message.content.split(" ")
	let command = msg[0]
	if (!command.startsWith(prefix)) return
		command = command.substr(3)
		console.log(command)
	if (command === "hehe")
		message.channel.send('heehee')
		
})

bot.login(token)
