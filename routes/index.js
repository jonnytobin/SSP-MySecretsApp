var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// If we get a GET request for /name
router.get('/secrets', function(req, res, next) {
  res.render('secrets');
});

// If we get a POST request for /name
router.post('/secrets', function(req, res, next) {
  if (req.body.Password == "password") {
    res.render('secrets', {Name: req.body.Name, Password: req.body.Password});
  }
  else {
      res.render('error');
  }
});

module.exports = router;
