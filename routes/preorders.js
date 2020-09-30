const express = require('express');
const router = express.Router();
const preorders = require('../Preorders');

router.get('/', (request, response) => {
    response.json(preorders);
});

router.get('/:option', (request, response) => {
    const found = preorders.some(preorders => preorders.option === request.params.option);
    if(found) {
        response.json(preorders.filter(preorders => preorders.option === request.params.option));
    } else {
        response.status(400).json({msg: `Album #${request.params.option} Not Found`});
    }
});
module.exports = router;