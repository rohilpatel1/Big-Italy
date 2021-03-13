const fs = require('fs');

const commands = fs.readdirSync('./commands');

const commandData = [];

const prefix = "bi "

for (const command of commands) {
	let index = commands.indexOf(command);
	if (!command.endsWith('.js')) {
		commands.splice(index, 1);
	} 
}

for (const command of commands) {
	let index = commands.indexOf(command);
	
	if (require(`../commands/${command}`).active === false) {
		commands.splice(index, 1)
	}
}

for (const command of commands) {
	if (command != 'help.js') {
		commandData.push({
		  name: require(`../commands/${command}`).name,
		  des: require(`../commands/${command}`).description
	  });
	}
}

function RunCommands(message,  client) {
	if (!message.content.toLowerCase().startsWith(prefix)) return;
	
	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	
	let index = commands.indexOf(command + '.js');
	
	if (index > -1) {
		let file = require(`../commands/${commands[index]}`);
			
		if (!file.active) return message.channel.send('This command is currently turned off. Try again later.');
		
		file.run(message, args, client, commandData);
	}
}

module.exports = { RunCommands };