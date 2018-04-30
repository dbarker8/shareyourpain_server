var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.post('/', function (req, res, next) {
    if(req.body.email){
        models.User.create({
            email: req.body.email
        }).then((result) => {
            res.send({ status: 'success', message: '' });
        })
    }else{
        res.status('401');
        res.send({ status: 'failed', message: '' });        
    }

});

module.exports = router;
