var connection = require("../config/connection");
 
var failureModel = {};
 
failureModel.getFailures = function(callback)
{
	if (connection)
	{
		connection.query('SELECT * FROM failures', function(error, rows) {
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
}

module.exports = failureModel;