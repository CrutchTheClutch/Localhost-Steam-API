const steamKey = "";	// Place your Steam API key in this variable as a string
const steamID = "";		// Place your Steam ID in this variable as a string

var express = require('express');
var request = require('request');
var app = express();
app.set('view engine', 'ejs');


// Homepage
// (localhost:4000/)
app.get('/', function(req, res) {
    res.render('pages/index');
});

// Achievement Tracker
// (localhost:4000/:appid) Replace ":appid" with id of game you would like to track
app.get('/:appid', function(req, res) {
    let url = 'https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=' + req.params.appid + '&key=' + steamKey + '&steamid=' + steamID;
    let aTotal = 0;
    let aEarned = 0;
    let aPercent;


    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
        let data = JSON.parse(steamHttpBody);
        let gameName = data.playerstats.gameName;
        let achievements = data.playerstats.achievements;
        
        for (var achievement in achievements) {
            if (achievements.hasOwnProperty(achievement)) {
                aTotal++;
            }
        }

        for ( var i = 0; i < aTotal; i++) {
            if (achievements[i].achieved === 1) {
                aEarned++;
            }
        }

        aPercent = ((aEarned / aTotal) * 100).toFixed(2);
        res.render('pages/achieve', {aEarned: aEarned, aTotal: aTotal, aPercent: aPercent});
    });
});

app.use('/static', express.static('public'));

var port = 4000;
var server = app.listen(port);
console.log('Listening on port ' + port);