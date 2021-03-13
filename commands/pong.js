const { colors } = require('../config/config.json');
const randomizer = require('./helpers/randomizer');

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "pong",
	description: "replies pong back to you; this is a dev feature",
	active: true,
	run: (message, args) => {
		message.channel.send('Pong!');
	}
}