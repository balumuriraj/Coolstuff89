var express = require('express');
var router = express.Router();

/* GET landing page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Landing Page' });
});

/* GET home page. */
router.get('/home', function(req, res) {
    res.render('home', { title: 'Home Page' });
});
module.exports = router;
