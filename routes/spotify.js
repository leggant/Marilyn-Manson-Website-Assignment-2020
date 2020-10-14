const express = require('express');
const Querystring = require('querystring');
require('dotenv').config();
const parser = require('body-parser');
const axios = require('axios');

const router = express.Router();

/* 
// // Spotify
const spotifyInfo = [];
const SpotifyTotalFollowers = [];

let config = {
  headers: {
    "Authorization" : `Basic ${process.env.BASE64}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
let body = {
  "grant_type" : "client_credentials",
}
let key;
app.get('/test', (req, res) => {
  axios.post('https://accounts.spotify.com/api/token',Querystring.stringify(body), config)
  .then(apires => {
    console.log(apires.data);
    let reqConfig = {
      headers: {
        "Authorization" : `${apires.data.token_type} ${apires.data.access_token}`
      }
    }
    axios.get(`https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/top-tracks?market=${process.env.SPOTIFYCOUNTRYCODE}`,{},reqConfig)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    })
  }).catch(error => {
    console.log(error);
  })
});

 */




// Spotify API middleware

// spotify constants



// spotify functions
/* function totalFollowers(data) {
  SpotifyTotalFollowers[0] = {
      followers: data
  };
};
 
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
}; */
 
// get top ten marilyn manson tracks for NZ
/* spotify.request(`https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/top-tracks?market=${process.env.SPOTIFYCOUNTRYCODE}`)
    .then(function(data) {
        returnInfo(data.tracks);
    })
    .catch(function(err) {
        console.error('Error occurred: ' + err);
});


// Get total manson Followers on spotify
spotify
  .search({ type: 'artist', query: 'Marilyn Manson' })
  .then(function(data) {
    totalFollowers(data.artists.items[0].followers.total);
  })
  .catch(function(err) {
    console.log(err);
  }); */
  module.exports = router; 