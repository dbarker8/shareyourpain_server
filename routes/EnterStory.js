var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    //
    res.send({status: 'success', message: ''});
});

module.exports = router;