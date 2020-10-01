const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const preorderalbum = require('./Preorders');
const dbase = require('nedb');
require('dotenv/config');
const app = express();


//const spotify = require('./Spotify');

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/', (req, res) => res.render('homepage', {
    preorderalbum
})
);
// Set Static Path
app.use(express.static('public'));

// Set routes, API routes.
app.use('/api/preorder', require('./routes/preorders'));
//app.use('/api/spotify', require('.routes/spotify'));

// Set Ports
const PORT = process.env.PORT || 666;
app.listen(PORT, () => console.log(`listening at ${PORT}`));