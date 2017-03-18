const config = require('./config.json');
const Discord = require("discord.js");
const request = require('request');
const cheerio = require('cheerio');
const client = new Discord.Client();

client.login(config.token);

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) => {
  if (message.content.startsWith("!update")) {
	url = 'https://playoverwatch.com/en-us/blog/'

	request(url, function(error, response, html){
        var json = { title : "", link : "", date : ""};
        if(!error){
        	var $ = cheerio.load(html);
            var title, link, date;

            $('.blog-details').filter(function(){
            	var posts = $(this);

            	json.title = posts.children().first().attr('title');

            	var link = posts.children().first().attr('href');

            	if (link.search('^http') != -1) {
            		json.link = link;
            	} else {
            		json.link = 'https://playoverwatch.com' + link;
            	}
            	//json.date = posts.next().hasClass('sub-title').text();

            	console.log(json.title + " " + json.link);
    			message.channel.sendMessage(json.title + " " + json.link);
            });
        }
        else {
        	console.log(error);
        }
    })
  }
});