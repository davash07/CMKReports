var express = require('express');
var router = express.Router();
var FailureCtrl = require('../controllers/failures');


// // API routes
// router.route('/failures')
//  .get(FailureCtrl.findAll);
// // .post(FailureCtrl.add);
//

router.route('/failures')
    .get(FailureCtrl.findAll);

module.exports = router;