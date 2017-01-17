var express = require('express');
var router = express.Router();
var FailureCtrl = require('../controllers/failures');

 // API routes
 router.route('/v1/failures')
  .get(FailureCtrl.findAll);

module.exports = router;