var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.json({
        people: {
            age: 27,
            name: 'Sasha'
        }
    });
});

module.exports = router;
