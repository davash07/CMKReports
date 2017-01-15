var connection = require("../config/connection");
 
var areaModel = {};
 
areaModel.getAreas = function(profile_id, callback)
{
	if (connection)
	{
        connection.query('SELECT * FROM profiles WHERE id = ' + profile_id, function(err, rows) {
            if(err)
			{
				throw err;
			}
			else
			{
                if(rows.length === 0){
                    rows = "Perfil no existe";
                    callback(null, rows);
                }else{
                    connection.query('SELECT * FROM areas_by_profiles WHERE profile_id = '+ profile_id, function(err, rows) {
                        if(err){
                            throw err;
                        }else{
                            var areas = [];
                            var cont = 0;
                            var area_by_profile_length = rows.length;
                            for(var k in rows) {
                                connection.query('SELECT * FROM areas WHERE id = ' + rows[k]["area_id"], function(err, rows) {
                                    if(err)
                                    {
                                        throw err;
                                    }
                                    else
                                    {
                                        for(var k in rows) {
                                            add_categories(rows[k], function(object){
                                                cont += 1;
                                                areas.push(rows);
                                                if(area_by_profile_length === cont){
                                                    callback(null, areas);
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
        });
	}
}

function add_categories(object, callback){
    connection.query('SELECT * FROM categories WHERE area_id =' + object["id"], function(err, rows) {
      object["categories"] = rows;
      callback(object);
    });
}

module.exports = areaModel;