var express = require('express');
var router = express.Router();
var FailureCtrl = require('../controllers/failures');


// // API routes
// router.route('/failures')
//  .get(FailureCtrl.findAll);
// // .post(FailureCtrl.add);
//

router.get('/failures', function(req, res, next) {
    res.get(FailureCtrl.findAll);
    res.json({message: 'dasasd'});
});
module.exports = router;