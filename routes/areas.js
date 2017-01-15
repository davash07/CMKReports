var express = require('express');
var router = express.Router();
var AreaCtrl = require('../controllers/areas');

// API routes
router.route('/v1/areas')
  .get(AreaCtrl.findAll);

module.exports = router;