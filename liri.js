require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
var request = require("request");
var input = process.argv[2]


// randomtrack = fs.readFile("random.txt", "utf8", function(error, data) {
//     return
// })

// console.log(randomtrack);

//TWITER REQUEST

if(input == "my-tweets"){


        var params = {screen_name: 'nodejs'};

        client.get('statuses/user_timeline', params, function(error, tweets) {
            if (!error) {
                for (var i=0; i<5; i++){
                    
                    console.log(tweets[i].text);
                }
            }
        });
    }


//SPOTIFY REQUEST

else if(input == "spotify-this-song"){

        track = process.argv[3];

        spotify.search({ type: 'track', query: track }, function(err, data) {
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;
            } 
            
            console.log(data.tracks)

            if (input = " "){
                track == "Ace of Base"
                console.log(input)
            }

            

        });
}



//OMDB MOVIE SEARCH

else if(input == "movie-this"){

        movietitle = process.argv[3]
        
        request("http://www.omdbapi.com/?t=" + movietitle + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

                if (!error && response.statusCode === 200) {

                    console.log(JSON.parse(body));

                console.log("Title: " + JSON.parse(body).Title);
                console.log("Year Made: " + JSON.parse(body).Year);
                console.log("Ratings: " + JSON.parse(body).Ratings[0]);
                console.log("Ratings: " + JSON.parse(body).Ratings[0]);
                console.log("Country of Origin:  " + JSON.parse(body).Country);
                console.log("Primary Language:  " + JSON.parse(body).Language);
                console.log("Plot:  " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
            
                }
        });
}



//RANDOM SEARCH

    fs.readFile('random.txt', 'utf8', function(err, song){
           
            input = process.argv[2];

            if(input == "do-what-it-says"){
                    console.log(input);
                    console.log(song);
            }
                

            spotify.search({ type: 'track', query: song }, function(err, data) {
                    if ( err ) {
                    console.log('Error occurred: ' + err);
                    return;
                    } 
                    console.log(data)
                })
            });
        



