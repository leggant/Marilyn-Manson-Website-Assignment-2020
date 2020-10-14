require('dotenv').config();
const express = require('express');
const Querystring = require('querystring');
const cors = require('cors');
const path = require('path');
const exphbs = require('express-handlebars');
const parser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');

// Database models
const User = require('./models/users');
const Tour = require('./models/tour');
const FeedbackForm = require('./models/userFeedback');

// Website Routes
const preorderalbum = require('./Preorders');
const spotify = require('./routes/spotify');
const tourdates = require('./routes/tour-update');
const feedbackForm = require('./routes/feedbackForm');

// declare the express app
const app = express();
// Set Static Path
app.use(express.static('public'));
// Set Ports
const PORT = process.env.PORT || 3000;
app.listen(PORT);

// cors middleware
app.use(cors());
// body parser middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use ((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT POST PATCH DELETE GET');
    return res.status(200).json({});
  }
  next();
});

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Spotify
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




// Homepage Route
app.get('/', (req, res) => res.render('homepage', {
    title: "Marilyn Manson || WE ARE CHAOS",
    preorderalbum, SpotifyTotalFollowers, spotifyInfo
}));
//sign up page || login in
app.get('/signup', (req, res) => res.render('signup', {
  title: "Marilyn Manson || Register",
  registered: true
}));



// Set routes, API routes.
//app.use('/api/preorder', require('./routes/preorders'));

//404 page || No Page Found
app.use((req, res) => {
  res.status(404).render('404',{ title: "Marilyn Manson || Page Not Found" })
});