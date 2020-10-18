require("dotenv").config();
const express = require("express");
const Querystring = require("querystring");
const cors = require("cors");
const path = require("path");
const exphbs = require("express-handlebars");
const parser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");

// Database models
const User = require("./models/users");
const Tour = require("./models/tour");
const FeedbackForm = require("./models/userFeedback");

// Website Routes
const preorderalbum = require("./Preorders");
const spotify = require("./routes/spotify");
const tourdates = require("./routes/tour-update");
const feedbackForm = require("./routes/feedbackForm");

// declare the express app
const app = express();
// Set Static Path
app.use(express.static("public"));
// Set Ports
const PORT = process.env.PORT || 3000;
app.listen(PORT);

// cors middleware
app.use(cors());
// body parser middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT POST PATCH DELETE GET");
    return res.status(200).json({});
  }
  next();
}); */

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/* -------------------------------------------------------------------------- */
/*                                 SPOTIFY API                                */
/* -------------------------------------------------------------------------- */

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

axios(authConfig)
  .then((auth) => {
    //console.log(auth.data.access_token, 'Auth Key returned');
    authKey = auth.data.access_token;
  })
  .then(() => {
    //console.log('top tracks auth key', authKey)
    getTopTenTracks(authKey);
  })
  .catch((err) => {
    console.log(err)
  }
);

/* ------------------------ GET SPOTIFY TOP 10 TRACKS ----------------------- */


let spotifyTopTracks = [];
async function getTopTenTracks(authKey) {
const topTenTracksConfig = {
  method: "get",
  url: `https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/top-tracks?market=${process.env.SPOTIFYCOUNTRYCODE}`,
  headers: {
    Authorization: `Bearer ${authKey}`,
  },
};

await axios(topTenTracksConfig)
  .then((res) => {
    let spotifyNum = 1;
    res.data.tracks.forEach((track) => {
      if(!track.external_urls.spotify) 
      {
        spotifyTopTracks.push({
          trackid: `topTrack-${spotifyNum}`,
          rank: spotifyNum,
          trackTitle: track.name,
          fromAlbum: track.album.name,
          albumTrackNumber: track.track_number,
          trackSpotifyLink: false,
          albumSpotifyLink: track.album.external_urls.spotify,
          trackPopularity: track.popularity,
          albumImage: track.album.images[1].url,
        });
          spotifyNum++;
      }
      else if(!track.album.external_urls.spotify)
      {
        spotifyTopTracks.push({
          trackid: `topTrack-${spotifyNum}`,
          rank: spotifyNum,
          trackTitle: track.name,
          fromAlbum: track.album.name,
          albumTrackNumber: track.track_number,
          trackSpotifyLink: track.external_urls.spotify,
          albumSpotifyLink: false,
          trackPopularity: track.popularity,
          albumImage: track.album.images[1].url,
        });
          spotifyNum++;
      } 
      else {
        spotifyTopTracks.push({
          trackid: `topTrack-${spotifyNum}`,
          rank: spotifyNum,
          trackTitle: track.name,
          fromAlbum: track.album.name,
          albumTrackNumber: track.track_number,
          trackSpotifyLink: track.external_urls.spotify,
          albumSpotifyLink: track.album.external_urls.spotify,
          trackPopularity: track.popularity,
          albumImage: track.album.images[1].url,
        });
          spotifyNum++;
      }
    });
    console.log(spotifyTopTracks)
    return spotifyTopTracks;
  })
  .then(console.log('top ten tracks returned'))
  .catch((error) => console.log(error));
}

/* ------------------ GET MARILYN MANSON SPOTIFY FOLLOWERS ------------------ */

let SpotifyTotalFollowers;


const spotifyFollowersConfig = {
  method: "get",
  url: `https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/top-tracks?market=${process.env.SPOTIFYCOUNTRYCODE}`,
  headers: {
    'Authorization': `Bearer ${authKey}`
  }
};

/* --------------------- GET MARILYN MANSON BACK CATALOG -------------------- */

let mansonBackCatalog = [];

const backCatalogConfig = {
  method: "get",
  url: `https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/top-tracks?market=${process.env.SPOTIFYCOUNTRYCODE}`,
  headers: {
    'Authorization': `Bearer ${authKey}`
  }
};



// Homepage Route
app.get("/", (req, res) => {
  res.render("homepage", {
    title: "Marilyn Manson || WE ARE CHAOS",
    preorderalbum,
    //SpotifyTotalFollowers,
    spotifyTopTracks,
  });
});

//sign up page || login in
app.get("/signup", (req, res) =>
  res.render("signup", {
    title: "Marilyn Manson || Register",
    registered: true,
  })
);

// Set routes, API routes.
//app.use('/api/preorder', require('./routes/preorders'));

//404 page || No Page Found
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Marilyn Manson || Page Not Found",
  });
});
