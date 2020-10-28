const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("dotenv").config();
//const Preorders = require('../models/preorder');
//const Preorder = mongoose.model(Preorders, preorderSchema);
const dbURI = process.env.PREORDERALBUMCOLLECTION;

router.get('/', (request, response) => {

});


module.exports = router; 