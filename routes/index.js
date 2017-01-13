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

router.post('/', function (req, res, next) {
    // you might like to do a database look-up or something more scalable here
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
    // you might like to do a database look-up or something more scalable here
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

// router.get('/dashboard', function (req, res, next) {
//   res.render('./dashboard/dashboard', {title: 'Dashboard CMK'});
// });
//
// router.get('/dashboard/areas', function (req, res, next) {
//     res.render('./dashboard/areas', {title: 'Dashboard CMK - Areas'});
// });

// module.exports = function (router) {
//
//     router.get('/', function (req, res, next) {
//         res.render('index');
//     });
//
//     router.get('/dashboard', function (req, res, next) {
//         res.render('dashboard/dashboard');
//     });
//
//     router.get('/login', function (req, res, next) {
//         res.render('index', { flash: req.flash() } );
//     });
//
//     router.post('/login', function (req, res, next) {
//
//         // you might like to do a database look-up or something more scalable here
//         if (req.body.username && req.body.username === 'user' && req.body.password && req.body.password === 'pass') {
//             req.session.authenticated = true;
//             res.redirect('/secure');
//         } else {
//             req.flash('error', 'Username and password are incorrect');
//             res.redirect('/login');
//         }
//
//     });
//
//     router.get('/logout', function (req, res, next) {
//         delete req.session.authenticated;
//         res.redirect('/');
//     });
//
// };


module.exports = router;
