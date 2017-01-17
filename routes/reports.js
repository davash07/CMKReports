var express = require('express');
var router = express.Router();
var ReportCtrl = require('../controllers/reports');

 // API routes
 router.route('/v1/reports')
  .post(ReportCtrl.add);

module.exports = router;