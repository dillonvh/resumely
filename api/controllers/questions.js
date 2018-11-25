const express = require('express');
const router = express.Router();

router.get('/:questionId', (req, res, next) => {
    const id = req.params.questionId;
    if (id === 'all') {
        res.status(200).json({
            message: 'You have requested the following route: api/questions/all'
        });
    }
    else
    {
        res.status(200).json({
            message: 'You have requested the following route: api/questions/'+String(id),
            id: id
        });
    }
});

module.exports = router;