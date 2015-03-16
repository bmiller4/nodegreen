var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
/* GET users listing. */


router.get('/users', function(req, res, next) {
 	res.send('What is love. Baby dont hurt me');
});


module.exports = router;
