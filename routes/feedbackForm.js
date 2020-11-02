const express = require('express');
const router = express.Router();
const feedback = require('../models/userFeedback');

router.post('/', async (req, res) => {
    const userfeedback = new feedback({
        name: req.body.name,
        email: req.body.email,
        comments: req.body.comments
    });
    try {
        const savedFeedback = await userfeedback.save();
        res.json(savedFeedback);
    } 
    catch(err){
        res.json({message: err});
    }
});

module.exports = router; 