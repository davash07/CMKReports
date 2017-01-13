/**
 * Created by devios on 13/01/17.
 */
var connection = require("../config/connection");

var areaModel = {};

failureModel.getFailures = function(callback)
{
    if (connection)
    {
        connection.query('SELECT * FROM areas', function(error, rows) {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, rows);
            }
        });
    }
};

module.exports = areaModel;