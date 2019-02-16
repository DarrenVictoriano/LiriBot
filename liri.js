var Liri = require("./brain_liri");
var liriBot = new Liri();

var term = process.argv[2];
var search = process.argv.slice(3).join(" ");


if (!term) {
    term = "spotify-this-song";
}

if (term === "concert-this") {
    console.log("Searching Band..\n\n");
    if (!search) {
        search = "All Time Low";
    }
    liriBot.searchBand(search);

} else if (term === "spotify-this-song") {
    console.log("Searching Spotify..\n\n");
    if (!search) {
        search = "The Sign";
    }
    liriBot.searchSpotify(search);
} else if (term === "movie-this") {
    console.log("Searching Movie..\n\n");
    if (!search) {
        search = "Mr. Nobody";
    }
    liriBot.searchMovie(search);
}