var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

//mongoose.model('posts', {content: String});

//WIP js page to render posts

router.get('/', function(req, res, next) {
   // res.send("I'm a little teapot");
   res.render('posts');
});

module.exports = router;

