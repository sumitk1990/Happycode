const mysql = require("mysql2");

//create here mysql connection

const dbConn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"niograph123",
    database: "company"
});
dbConn.connect(function(error){
    if(error) throw error;
    console.log("Database Connected Successfully!");


});
module.exports=dbConn;