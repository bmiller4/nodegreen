/**
 * Created by brennan on 9/16/15.
 */
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('projects')
});





module.exports = router;