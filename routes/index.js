// This is an appplication to allow the user to store
// their secrets. To log in use:
//                              Username: username
//                              Password: password

var express = require('express');
var router = express.Router();
// Creating an array to store the secrets
var list = [];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

// If we get a GET request for /secrets
router.get('/secrets', function (req, res, next) {
    res.render('secrets');
});

// If we get a POST request for /secrets
router.post('/secrets', function (req, res, next) {
    // If passward is equal to"password"
    if (req.body.Password == "password") {
        res.render('secrets', { Name: req.body.Name, Password: req.body.Password });
        getText();
    }
    else {
        res.redirect('error');
    }
    console.log(list)
});

// Trying to get the text form the textfield (secret) and 
// add it to the list array
function getText() {
    var str = document.getElementById("txt");
    list.push(str.value);
    str.value = "";
    str.focus();
    var area = document.getElementById("txtArea");
    area.value = "";
    for (var i = 0; i < list.length; i++) {
        area.value += list[i] + "\n";
        console.log(list[i]);
    }
}

module.exports = router;
