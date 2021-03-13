const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
	client.user.setPresence({
		status: 'idle',
		activity: {
			name: 'Italian Food Wars',
			type: 'COMPETING'
		}
	});
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	require('./lib/commands').RunCommands(message, client);
});

client.login(process.env.token);
