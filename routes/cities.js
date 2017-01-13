var express = require('express');
var router = express.Router();
var CityCtrl = require('../controllers/cities');


// API routes
router.route('/cities')
 .get(CityCtrl.findAll);

module.exports = router;