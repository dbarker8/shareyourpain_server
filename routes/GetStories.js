var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.get('/', function (req, res, next) {

    models.Story.findAll({
        attributes: ['body', 'createdAt'],
        limit: 200,
        order: [ ['createdAt', 'DESC'] ]
    }).then((stories) => {
        res.send({ 
            status: 'success', 
            message: '', 
            stories: stories 
        });
    }).catch(err => {console.log(err)});
});

module.exports = router;
