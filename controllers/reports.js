var ReportModel = require('../models/report');

//POST - Insert a new register
exports.add = function(req, res){
    var result = { success: false, status_code: 400, status_message: "Required fields" };
    var user_id = req.body.user_id;
    var description = req.body.description;
    var date = req.body.date;
    var theater_id = req.body.theater_id;
    var failure_id = req.body.failure_id;
    var pictures = req.body.pictures;
    
    if(user_id != undefined && description != undefined && date != undefined && theater_id != undefined && failure_id != undefined && pictures != undefined){
        ReportModel.insertReport(user_id, description, date, failure_id, theater_id, pictures, function(error, data) {
            type_data = (({}).toString.call(data).match(/^\[object\s(.*)\]$/)[1]) ;
            if(type_data === "String"){
                result.success = false;
                result.status_code = 404;
                result.status_message = data;
            }else{
                result.success = true;
                result.status_code = 200;
                result.status_message = "Areas";
                result.areas = data;
            }
            res.status(result.status_code).jsonp(result);
		});
    }else{
        res.status(result.status_code).jsonp(result);
    }
};