const mysql = require("mysql2")
const con = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"niograph123",
    database:"simple"
});

con.connect((error)=>{
    if(error)
    {
        console.log("error in connection,",error)


    }
})
module.exports=con;