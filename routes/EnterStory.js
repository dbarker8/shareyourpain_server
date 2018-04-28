var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.post('/', function (req, res, next) {
    

    models.Story.create({
      body: req.body.storyBody, 
      color: req.body.color,
      font: req.body.font,
      userId: 1, //CHANGE THIS to req.user based thing
    }).then((story) => {
        res.send({status: 'success', message: ''});

    })
});

module.exports = router;
