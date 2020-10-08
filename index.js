// Modules
const express = require('express');
const cors = require('cors');
const path = require('path');
const exphbs = require('express-handlebars');
const nedb = require('nedb');
const SpotifyNode = require('spotify-web-api-node');
const SpotifyStrategy = require('passport-spotify').Strategy;
require('dotenv/config');

// declare the express app
const app = express();

// Middlewares
// cors middleware
app.use(cors());

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) => res.render('homepage', {
    title: "Marilyn Manson || WE ARE CHAOS",
    preorderalbum
}));
//sign up page || login in
app.get('/signup', (req, res) => res.render('signup', {
  title: "Marilyn Manson || Register",
  registered: true
}));

// Set Static Path
app.use(express.static('public'));

// Route files
const preorderalbum = require('./Preorders');

// Set routes, API routes.
app.use('/api/preorder', require('./routes/preorders'));


// Set Ports
const PORT = process.env.PORT || 666;
app.listen(PORT, () => console.log(`listening at ${PORT}`));