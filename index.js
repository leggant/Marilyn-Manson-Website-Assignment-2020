const express = require('express');
const path = require('path');
const bars = require('handlebars');
const dbase = require('nedb');
require('dotenv/config');

const app = express();
// Set Static Path
app.use(express.static('public'));


// Set Ports
const PORT = process.env.PORT || 666;
app.listen(PORT, () => console.log(`listening at ${PORT}`));

/* app.use('/spotify', () => {
    console.log('this is middleware')
})
 */
/* // Routes

app.get('/spotify', (request, response) => {
    response.send('Spotify');
}); */