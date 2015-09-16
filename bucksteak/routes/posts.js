var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


//WIP js page to render posts
router.get('/', function(req, res) {
   res.render('posts');
});

module.exports = router;

