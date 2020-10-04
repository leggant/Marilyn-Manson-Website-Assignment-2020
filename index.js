const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const preorderalbum = require('./Preorders');
const SpotifyAPI = require('node-spotify-api');

require('dotenv/config');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Spotify Middleware
let spotify = new SpotifyAPI({
    id: process.env.SPOTIFY_APP_USER_ID,
    secret: process.env.SPOTIFY_APP_SECRET
});

//constants
const spotifyInfo = [];
const SpotifyTotalFollowers = [];
const SpotifyCountryCode = [];
const SpotifyMansonAlbums = [];

// get the users location for spotify market specific data

// get NZ album data from spotify

spotify.request(`https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/albums?include_groups=album&market=${process.env.SPOTIFYCOUNTRYCODE}`)
.then(function(data){
    //mansonAlbumData(data.items);
})
.catch(function(err){
    console.error('Error occurred: ' + err);
});


// get top ten marilyn manson tracks for NZ

spotify.request(`https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/top-tracks?market=${process.env.SPOTIFYCOUNTRYCODE}`)
    .then(function(data) {
        returnInfo(data.tracks);
    })
    .catch(function(err) {
        console.error('Error occurred: ' + err);
});

function returnInfo(data) {
    data.forEach((element, index) => {
        spotifyInfo[index] = {
            rank: index + 1,
            trackname: element.name,
            albumname: element.album.name,
            popularity: element.popularity,
            releasedate: element.album.release_date,
            albumimage: element.album.images[1].url,
            spotifytrackurl: element.external_urls.spotify,
            spotifyartisturl: element.artists[0].external_urls.spotify,
            spotifyalbumurl: element.album.external_urls.spotify
        };
    });
}

// Get total manson Followers on spotify

spotify
  .search({ type: 'artist', query: 'Marilyn Manson' })
  .then(function(data) {
    totalFollowers(data.artists.items[0].followers.total);
  })
  .catch(function(err) {
    console.log(err);
  });

function totalFollowers(data) {
    SpotifyTotalFollowers[0] = {
        followers: data
    }
}
// Available Markets - use to populate select form element
spotify
  .search({ type: 'album', query: 'Marilyn Manson' })
  .then(function(data) {
    //console.log(data.albums.items[1].name, data.albums.items[1]);
  })
  .catch(function(err) {
    console.log(err);
  });


// Homepage Route
app.get('/', (req, res) => res.render('homepage', {
    preorderalbum,
    spotifyInfo, 
    SpotifyTotalFollowers
}));

// Set Static Path
app.use(express.static('public'));

// Set routes, API routes.
app.use('/api/preorder', require('./routes/preorders'));

// Set Ports
const PORT = process.env.PORT || 666;
app.listen(PORT, () => console.log(`listening at ${PORT}`));