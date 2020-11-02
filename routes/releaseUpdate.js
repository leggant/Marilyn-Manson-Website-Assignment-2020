const express = require('express');
const router = express.Router();
const Model = require('../models/albumReleaseUpdate');

router.post('/', async (req, res) => {
    const signup = new Model({
        name: req.body.name,
        email: req.body.email
    });
    try {
        const data = await signup.save();
        res.json(data);
    } 
    catch(err){
        res.json({message: err});
    }
});

module.exports = router; 