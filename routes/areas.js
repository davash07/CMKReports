/**
 * Created by devios on 13/01/17.
 */
var express = require('express');
var router = express.Router();
var AreaCtrl = require('../controllers/areas');


router.route('/areas')
    .get(AreaCtrl.findAll);
module.exports = router;