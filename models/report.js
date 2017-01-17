var connection = require("../config/connection");
 
var areaModel = {};
 
areaModel.insertReport = function(user_id, description, date, failure_id, theater_id, pictures, callback)
{
	if (connection)
	{
        connection.query('SELECT * FROM users WHERE id = ' + user_id, function(err, rows) {
            if(err)
			{
				throw err;
			}
			else
			{
                if(rows.length === 0){
                    rows = "Usuario no existe";
                    callback(null, rows);
                }else{
                    connection.query('SELECT * FROM theaters WHERE id = ' + theater_id, function(err, rows) {
                        if(err)
                        {
                            throw err;
                        }
                        else
                        {
                          if(rows.length === 0){
                                rows = "El teatro reportado no existe";
                                callback(null, rows);
                            }else{
                              connection.query('SELECT * FROM failures WHERE id = '+ failure_id, function(err, rows) {
                                if(err){
                                    throw err;
                                }else{
                                    if(rows.length === 0){
                                        rows = "La falla reportada no existe";
                                        callback(null, rows);
                                    }else{
                                        rows = "BIEN";
                                        callback(null, rows);
                                    }
                                }
                              });
                            }
                        }
                    });
                }
            }
        });
	}
}

module.exports = areaModel;