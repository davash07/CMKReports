var FailureModel = require('../models/failure');

//GET - Return all registers
exports.findAll = function(req, res){
    FailureModel.getFailures(function(error, data)
		{
            console.log('GET /failures')
            res.status(200).jsonp({ success: true, status_code: 200, status_message: "Failures", failures: data});
		});
};