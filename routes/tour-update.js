const express = require('express');
const router = express.Router();
const tourUpdate = require('../models/tourUpdate');

router.post('/', async (req, res) => {
    const usersignup = new tourUpdate({
        name: req.body.name,
        email: req.body.email
    });
    try {
        const savedUpdate = await usersignup.save();
        res.json(usersignup);
    } 
    catch(err){
        res.json({message: err});
    }
});

module.exports = router; 

/* Cities to add

American Tour 2020 - Tickets
New York
Chicago
Washington D.C
Boston
Dallas
Houston, Texas
Seattle
Tampa
Los Angeles
Denver
Orlando
Miami
San Diego
Atlanta
Jacksonville
Detroit
Portland
Philadelphia
Las Vegas
Baltimore
Phoenix

*/