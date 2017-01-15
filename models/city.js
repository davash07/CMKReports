var connection = require("../config/connection");
 
var cityModel = {};
 
cityModel.getCities = function(callback)
{
	if (connection)
	{
		connection.query('SELECT * FROM cities', function(err, rows) {
			if(err)
			{
				throw err;
			}
			else
			{
                var cont = 0;
                for(var k in rows) {
                    add_theaters(rows[k], function(object){
                        cont += 1;
                        if(rows.length === cont){
                            callback(null, rows);
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