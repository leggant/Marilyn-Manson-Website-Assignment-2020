const express = require('express');
const router = express.Router();
require('dotenv').config();
const albumPreorder = require('../models/preorder');

router.get('/', async (req, res) => {
    try {
        const data = await albumPreorder.find();
        const preorderData = await res.json(data);
        return preorderData;
    } 
    catch (error) {
        res.json({message: error});
    }
});


// create a function to send each item to a partial, then add to the home page

// used this route to load the data into the data base
// wont be used again
// router.post('/', (req, res) => {
//     const newAlbum = new albumPreorder({
//         "option": "5",
//         "title" : "We Are Chaos",
//         "edition": "Exclusive Marbled Grey LP",
//         "price": "$24.98 USD",
//         "format": "Vinyl + MP3",
//         "releaseDate" : "11 September 2020",
//         "shipping" : "10 September 2020",
//         "image": "/img/Album/marled-grey-lp.jpg",
//         "url": "https://store.marilynmanson.com/products/we-are-chaos-exclusive-colorway-lp"
//     });
//     newAlbum.save()
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// });



module.exports = router; 