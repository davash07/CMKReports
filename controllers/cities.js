var CityModel = require('../models/city');

//GET - Return all registers
exports.findAll = function(req, res){
    CityModel.getCities(function(error, data) {
            console.log('GET /cities')
            res.status(200).jsonp({ success: true, status_code: 200, status_message: "Cities with theaters", cities: data});
		});
};