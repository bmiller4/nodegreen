var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {title: 'Brennan\'s Fuckhouse', animal: 'hampster', plant: 'elderberries'});
});



module.exports = router;
