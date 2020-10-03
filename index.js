const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const preorderalbum = require('./Preorders');
const SpotifyAPI = require('node-spotify-api');

require('dotenv/config');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Spotify Middleware
let spotify = new SpotifyAPI({
    id: process.env.SPOTIFY_APP_USER_ID,
    secret: process.env.SPOTIFY_APP_SECRET
});

spotify.request('https://api.spotify.com/v1/artists/2VYQTNDsvvKN9wmU5W7xpj/top-tracks?market=NZ')
.then(function(data) {
    returnInfo(data.tracks); 
})
.catch(function(err) {
  console.error('Error occurred: ' + err); 
});

const spotifyInfo = [{}];

function returnInfo(data) {
    data.forEach((element, index) => {
        //spotifyInfo.append(element.name);//, element.album.name, element.album.release_date, element.artists[0].name, element.artists[0].external_urls.spotify, element.album.images[2].url, element.album.external_urls.spotify);
        console.log(element.name);
        console.log(element.album.name);
        console.log(element.album.release_date);
        console.log(element.artists[0].name);
        console.log(element.artists[0].external_urls.spotify);
        console.log(element.album.images[2].url);
        console.log(element.album.external_urls.spotify);
    });
}


// Homepage Route
app.get('/', (req, res) => res.render('homepage', {
    preorderalbum
})
);
// Set Static Path
app.use(express.static('public'));

// Set routes, API routes.
app.use('/api/preorder', require('./routes/preorders'));

// Set Ports
const PORT = process.env.PORT || 666;
app.listen(PORT, () => console.log(`listening at ${PORT}`));