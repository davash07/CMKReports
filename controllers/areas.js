var AreaModel = require('../models/area');

//GET - Return all registers
exports.findAll = function(req, res){
    console.log('POST /areas');
    var result = { success: false, status_code: 400, status_message: "Required fields" };
    var profile_id = req.param('profile_id');
    if(profile_id != undefined){
        AreaModel.getAreas(profile_id, function(error, data) {
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