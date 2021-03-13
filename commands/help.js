const { colors } = require('../config/config.json');
const randomizer = require('./helpers/randomizer');

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "",
	description: "",
	active: true,
	run: (message, args, client, commandData) => {
		const helpEmbed = new MessageEmbed()
		  .setTitle('Showing Help Menu For Big Italy')
		  .setColor(randomizer(colors));
		  
		  for (const command of commandData) {
		  	helpEmbed.addField(command.name, command.des);
		  }
		  
		 message.channel.send(helpEmbed)
	}
}