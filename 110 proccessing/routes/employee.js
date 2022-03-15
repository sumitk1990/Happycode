const express = require("express");
const router = express.Router();
const mysql = require("mysql2")
const con =require("../config/db");


router.get("/",(req,res,next)=>{
    con.query("select * from employees",(err,result)=>{
        if(err){res.send("rest in api")}
        else{res.send(result)}
    })
})
router.post('/newuser', (req, res,next)=>{
  console.log("newuser",req,"\n",JSON.stringify(req.body))
    let employees = req.body;
    if (!employees) {
    return res.status(400).send({ error:true, message: 'Please provide employees' });
    }
    con.query("INSERT INTO employees SET ? ", employees, function (error, results,) {
    if (error) throw error;
    return res.send({results});
    });
    });


//router.post("/",(req,res,next)=>{
  //  con.connect(function(err) {
    //    if (err) throw err;
      //  console.log("Connected!");
        //Insert a record in the "customers" table:
        //var sql = "INSERT INTO employees (id,first_name,last_name,email,phone,organization,designation,salary,status,is_deleted,created_at,update_at) VALUES ('3,neha,sumit,sumitpagal@gmail.com,2561325,jindal,AUTO Engg,45000,3,null,null,null')";
        //con.query(sql, function (err, result) {
          //if (err) throw err;
          //console.log("1 record inserted");
        //});
      //});
//});

//router.post("/",(req,res,next)=>{
  // const employees =req.body;
   //con.query("INSERT INTO employees SET?",employees,(error,result,)=>{
     //  console.log(error)
       //if(error) throw error;
       //res.send(result)
   //})
//})

module.exports=router;