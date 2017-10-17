var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({
        people: {
            age: 22,
            name: 'Sasha'
        }
    });
});

module.exports = router;
