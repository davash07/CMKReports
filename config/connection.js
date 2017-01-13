var mysql = require('mysql');
    
var development_db = "cinemark_reports_dev",
    production_db = "cinemark_reports_prod";

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Mysql-2016',
  database : development_db
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('Connected to Database Mysql, connected as id ' + connection.threadId);
});

module.exports = connection;