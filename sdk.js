var unirest = require("unirest");

var req = unirest("GET", "https://rapidapi.p.rapidapi.com/pokemon_stats.json");

req.headers({
	"x-rapidapi-key": "SIGN-UP-FOR-KEY",
	"x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});