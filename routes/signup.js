const express = require('express');
const signuprouter = express.Router();

let Users = require('../models/user');

signuprouter.get('/signup', (request, response) => {
    response.render('signup');
})


module.exports = signuprouter; 