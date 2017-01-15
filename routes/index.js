var express = require('express');
var router = express.Router();
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/dashboard', function (req, res, next) {
        res.render('dashboard/dashboard');
    });
router.get('/welcome', function (req, res, next) {
    res.render('dashboard/dashboard');
});

router.get('/login', function (req, res, next) {
        res.render('index');
    });

router.get('/area', function (req, res, next) {
        res.render('dashboard/cities', city.get);
    });

router.post('/', function (req, res, next) {
    if (req.body.name && req.body.name === 'user' && req.body.encrypted_password && req.body.encrypted_password === 'pass') {
        // req.session.authenticated = true;
        console.log("hizo login perro");
        res.redirect('/dashboard');
    } else {
        // req.flash('error', 'Username and password are incorrect');
        res.redirect('/login');
        console.log("contraseña paila")
    }

});
router.post('/login', function (req, res, next) {
    if (req.body.name && req.body.name === 'user' && req.body.encrypted_password && req.body.encrypted_password === 'pass') {
            // req.session.authenticated = true;
            console.log("hizo login perro");
            res.redirect('/dashboard');
        } else {
            // req.flash('error', 'Username and password are incorrect');
            res.redirect('/login');
            console.log("contraseña paila")
        }

    });

router.get('/logout', function (req, res, next) {
    // delete req.session.authenticated;
    res.redirect('/login');
});

module.exports = router;
