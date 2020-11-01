const express = require('express');
const router = express.Router();
const feedback = require('../models/userFeedback');

router.post('/', async (req, res) => {
    try {
        const userfeedback = new feedback({
            name: req.params.name,
            email: req.params.email,
            comments: req.params.comments
        });
        userfeedback.save()
    } catch(err){
        res.json({message: err});
    }
});

module.exports = router; 