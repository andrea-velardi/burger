//=============================================
//  CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
//  WHICH CAN BE EITHER ON THE LOCAL COMPUTER OR DEPLOYED TO JAWSDB
//
//
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 8080,
    host: 'localhost',
    user: 'root',
    password: '',
    database: "burgers_db"
}); 



connection.connect(function(err) {
    if (err) throw err; 
        console.log("connected as id: "+connection.threadId);
    }); 

module.exports = connection;
