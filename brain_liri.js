require("dotenv").config();
const axios = require("axios");
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");


function Liri() {

    this.searchBand = function (search) {
        axios.get("https://rest.bandsintown.com/artists/" + search + "/events", {
            params: {
                app_id: "codingbootcamp"
            }
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    this.searchSpotify = function (search) {
        var spotify = new Spotify({
            id: keys.code.spotify_id,
            secret: keys.code.spotify_secret
        });

        spotify.search({ type: 'track', query: search }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            for (i in data.tracks.items) {
                var track = data.tracks.items[i];

                console.log("Artist(s): " + track.artists[0].name);
                console.log("Track: " + track.name);
                console.log("Spotify song link: " + track.external_urls.spotify);
                console.log("Album: " + track.album.name);
                console.log("\n--------------------------------------\n\n");
            }

        });
    }

}

module.exports = Liri;