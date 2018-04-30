var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.get('/', function (req, res, next) {

    models.Story.findAll({
        attributes: ['body', 'createdAt', 'style', 'userId', 'type'],
        limit: 200,
        where: {isActive: true},
        order: [ ['createdAt', 'DESC'] ]
    }).then((stories) => {
        res.send({ 
            status: 'success', 
            message: '', 
            stories: stories 
        });
        // console.log(stories)
    }).catch(err => {console.log(err)});
});

module.exports = router;
