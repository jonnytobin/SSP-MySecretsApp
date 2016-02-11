var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/secrets', function(req, res, next) {
  // SELECT password from DB where username='req.body.yourName'

  if (req.body.Password == "password") {
    res.render('/', {Name: req.body.Name, pwd: req.body.Password});
  }
  else {
      res.redirect('/index?Name=Tom');
  }
});

module.exports = router;
