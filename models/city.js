var connection = require("../config/connection");
 
var cityModel = {};
 
cityModel.getCities = function(callback)
{
	if (connection)
	{
		connection.query('SELECT * FROM cities', function(error_cities, rows_cities) {
			if(error_cities)
			{
				throw error_cities;
			}
			else
			{
                var cities = [];
                for(var k in rows_cities) {
                    add_theaters(rows_cities[k], function(object){
                        cities.push(object);
                        if(cities.length === rows_cities.length){
                            callback(null, cities);   
                        }
                    });
                }
			}
		});
	}
}

function add_theaters(object, callback){
    connection.query('SELECT * FROM theaters WHERE city_id =' + object["id"], function(err, rows) {
      object["theaters"] = rows;
      callback(object);
    });
}

module.exports = cityModel;