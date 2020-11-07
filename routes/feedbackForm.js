const express = require('express');
const router = express.Router();
const Model = require('../models/userFeedback');

router.post('/', async (req, res) => {
    const userfeedback = new Model({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comments
    });
    try {
        const save = await userfeedback.save();
        res.json(userfeedback);
    } 
    catch(err){
        res.json({message: err});
    }
});

module.exports = router; 