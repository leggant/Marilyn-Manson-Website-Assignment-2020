const express = require('express');
const Querystring = require('querystring');
require('dotenv').config();
const axios = require('axios');
const Handlebars = require("handlebars");

const router = express.Router();

router.get('/', (request, response) => {
axios(authConfig)
.then((auth) => {
  authKey = auth.data.access_token;
})
.then(() => {
  getTopTenTracks(authKey)
  .then(topTracks => {
  getSpotifyFollowers(authKey)
    .then((followerRes) => {
      getBackCatalog(authKey)
      .then((backCat) => {
        response.render('partials/toptracks',{"spotifyTopTracks":topTracks, "spotifyFollowers":followerRes, layout:false}, 
        (err, html, followerRes) => {
          response.render('partials/backCatalog',{"backCatalog":backCat,layout:false} , (err,html2) => {
            let allData = {'followers':followerRes,'backCatalog':html2,'topTracks':html};   
            response.send(allData)
          })
        })
      })
      .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
  });
})
.catch((error) => console.log(error));
});

/* ------------------------ GET SPOTIFY AUTHETICATION ----------------------- */

let authKey;

const body = Querystring.stringify({
  grant_type: "client_credentials"
});
const authConfig = {
  method: "post",
  url: "https://accounts.spotify.com/api/token",
  headers: {
    'Authorization': `Basic ${process.env.BASE64}`,
    "Content-Type": "application/x-www-form-urlencoded"
  },
  data: body
};

/* ------------------------ GET SPOTIFY TOP 10 TRACKS ----------------------- */

async function getTopTenTracks(authKey) {
  const topTenTracksConfig = {
    method: "get",
    url: `https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/top-tracks?market=${process.env.SPOTIFYCOUNTRYCODE}`,
    headers: {
      Authorization: `Bearer ${authKey}`,
    },
  };

const ttRes = await axios(topTenTracksConfig)
  .then((res) => {
    let spotifyTopTracks = [];
    let spotifyNum = 1;
    res.data.tracks.forEach((track) => {
      spotifyTopTracks.push({
        trackid: `topTrack-${spotifyNum}`,
        albumid: track.id,
        rank: spotifyNum,
        trackTitle: track.name,
        fromAlbum: track.album.name,
        albumTrackNumber: track.track_number,
        trackSpotifyLink: track.external_urls.spotify,
        albumSpotifyLink: track.album.external_urls.spotify,
        trackPopularity: track.popularity,
        albumImage: track.album.images[1].url
      });
        spotifyNum++;
    });
    return spotifyTopTracks;
  })
  .catch((error) => console.log(error));
  return ttRes;
}

/* ------------------ GET MARILYN MANSON SPOTIFY FOLLOWERS ------------------ */

//let SpotifyTotalFollowers;

async function getSpotifyFollowers(authKey) {
  const spotifyFollowersConfig = {
    method: "get",
    url: `https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}`,
    headers: {
      'Authorization': `Bearer ${authKey}`
    }
  }
  const response = await axios(spotifyFollowersConfig)
  return response.data.followers.total
}

/* --------------------- GET MARILYN MANSON BACK CATALOG -------------------- */

async function getBackCatalog(authKey) {
  const backCatalogConfig = {
    method: "get",
    url: `https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/albums?limit=50&include_groups=album&market=NZ`,
    headers: {
      'Authorization': `Bearer ${authKey}`
    }
  };
  const response = await axios(backCatalogConfig);
  const albums = await saveBackCatalog(response.data.items);
  let mansonBackCatalog = [];
  albums.forEach((album, index) => {
    mansonBackCatalog[index] = album
  })
  return mansonBackCatalog
}

async function saveBackCatalog(albums) {
  let mansonSpotifyBackCatalogRawData = [];
  const data = await albums
  data.forEach((album) => {
    mansonSpotifyBackCatalogRawData.push({
      albumTitle: album.name,
      released: album.release_date.split('-')[0],
      albumLink: album.external_urls.spotify,
      albumImage: album.images[1].url
    })
  })
  return mansonSpotifyBackCatalogRawData
}

module.exports = router; 