const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("dotenv").config();
const dbURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@MansonDB.cnnfy.mongodb.net/albumPreorders?retryWrites=true&w=majority`;

router.get('/', (request, response) => {
    mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((response) => {
        console.log(response)
    })
    .catch();
});


module.exports = router; 