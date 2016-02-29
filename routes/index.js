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
  // SELECT password from DB where username='req.body.yourName'

  if (req.body.Password == "password") {
    res.render('secrets', {Name: req.body.Name, Password: req.body.Password});
  }
  else {
      res.redirect('/index?Name=Tom');
  }
});

module.exports = router;
