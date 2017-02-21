const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/scrape', function(req, res){
	//Overwatch Announcements forum
	url = 'https://us.battle.net/forums/en/overwatch/21446648/'

	request(url, function(error, response, html){
        if(!error){
        	var $ = cheerio.load(html);
            var title, link, date;
            var json = { title : "", link : "", date : ""};

            $('.ForumTopic').filter(function(){
            	console.log($(this).attr('href'));
            });
        }
    })
});

app.listen('8081');

exports = module.exports = app;