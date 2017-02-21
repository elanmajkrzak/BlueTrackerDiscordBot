const config = require('./config.json');
const Discord = require("discord.js");
const scraper = require("scraper.js")
const client = new Discord.Client();

client.login(config.token);

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.sendMessage("pong!");
  }
});