//const Connection = require("mysql2/typings/mysql/lib/Connection");
var dbConn = require("../../config/db.config");
const EmployeeModel = require("../models/employee.model");
const {addEmployeeValidation} = require("../../validation/employees/employee.validation");
function createResponse(){
   function Response(){
       this.error=false;
       this.errorMsg="";
       this.errorCode=999;
       this.successMsg="";
       this.responseData=undefined;
   }
   var obj=new Response();
   return obj;
}
module.exports = function(app) {

exports.getEmployeeList =(req,res)=>{

  EmployeeModel.getAllEmployees((err,employees) => {
 
       console.log("we are here");
   })
}

app.get('/API/employee/initialize', function(req, res,next) {

   console.log("/API/employee/initialize",EmployeeModel.getAllEmployees )
   res.send("/API/employee/initialize");
});
app.get('/API/employee/getallemployee', function(req, res,next) {

   console.log("/API/employee/getallemployee")
   var query = dbConn.query('SELECT * FROM employees',function(err,rows){
             console.log("err",err,"\n rows",rows);
      if(err){
          console.log(err);
          return next("Mysql error, check your query");
      }
      res.send(rows);
   });
});

app.get("/API/employee/GetallEmploye/:id",(req,res,next)=>{
   console.log("/API/employee/GetallEmploye/:id")
   var query =dbConn.query("SELECT * FROM employees WHERE employeeID =?",[req.params.id],(err,rows)=>{
     if(err) {
        console.log(err);
        return next ("Mysql error, check your query");
     }
     res.send(rows);
   })
 })

// Retrieve user with id
app.get("/API/employee/:name",function(req,res){
   console.log(req.params);
   res.send(req.params);
});
app.post('/API/employee/UpdateEmployee', function(req, res,next) {

   console.log("req.body")
   var data ={
      employeeID: req.body.employeeID, 
      first_name: req.body.first_name,
      last_name : req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      organization: req.body.organization,  
      designation : req.body.designation,
      salary : req.body.salary,
      status : req.body.status,
      is_deleted : req.body.is_deleted,
      created_at : req.body.created_at,
      update_at: req.body.update_at
      };
      var sql= "INSERT INTO employees SET?";
   var query = dbConn.query(sql,data,function(err,rows){
   console.log("err",err,"\n rows",rows);
      if(err){
          console.log(err);
          return next("Mysql error, check your query");
      }
      res.send(rows);
   });
});

app.put('/API/employee/Employeesput', function(req, res,next) {
   console.log(req.body);
   var query = dbConn.query("UPDATE employees SET first_name= 'love' WHERE employeeID = '1';",function(err,rows){
             console.log("err",err,"\n rows",rows);
      if(err){
          console.log(err);
          //return next("Mysql error, check your query");
      }
      res.send(rows);
   });
});


app.delete('/API/employee/DeleteEmployees/:id', function(req, res,next) {
   console.log(req.body);
   var query = dbConn.query("DELETE  FROM employees WHERE employeeID=?",[req.params.id],function(err,rows){
             console.log("err",err,"\n rows",rows);
      if(err){
          console.log(err);
          return next("Mysql error, check your query");
      }
      res.send(rows);
   });
});
//  Update user 
//app.post("/API/employee/UpdateEmployee",function(req,res){
  // var responseObj=createResponse();
   //responseObj.responseData=req.body
   //res.send(responseObj);
  //console.log(req.body.name)
//})

//router.delete("/:id",(req,res,next)=>{
  // let query =con.query("DELETE  FROM users WHERE userID=?",[req.params.id],(err,rows)=>{
    // if(err) 
     //res.send("DELETE..........SUCCESSFULLY................");
     //else
     //console.log(err);
   //});
 //});
//router.put("/",(req,res,next)=>{
 //console.log(req.body)
  //let data ={username:req.body.username,password:req.body.password};
  //let sql ="UPDATE users SET username";
  //let sql ="UPDATE users SET username ='kaju' WHERE username ='love' ";
  //let query= con.query(sql,function(err,result){
    //if(err) throw err;
    //console.log(sql);
    //console.log(result.affectedRows+" record(s) updated");
  //});
//});
//app.put("/API/employee/employeeput",(req,res,next)=>{
  // res.status(200).json({
    //  message:"this is student put request",body:req.body
  // })
  // })
//app.put("/API/employee/GetallEmploye",(req,res,next)=>{
   //let query =dbConn.query("UPDATE employees WHERE employeeID =?",[req.params.id],(err,result)=>{
     //if(err) throw err;
     //else
     //console.log(result);
   //})
 //})
//});

//app.put("/employee",function(req,res){
   //res.send("!!!!!!!!!!!!this is put!!!!!!!!!!!!!!!!")
   //let employeeID = req.body.employeeID;
   //let first_name = req.body.first_name;
   //var sql = "UPDATE employees SET first_name = ? WHERE employeeID = ?";
   //dbConn.query(sql, function (err, result) {
     //if (err) throw err;
    // console.log(result.affectedRows + " record(s) updated");
  // });
//});
//app.put('/API/employee/UpdateEmployee', function (req, res) {
  // let user_id = req.body.user_id;
   //let user = req.body.user;
   //if (!user_id || !user) {
   //return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
   //}
   //dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
   //if (error) throw error;
   //return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
   //});
   //});

//  Delete user
//app.delete('/user', function (req, res) {
   //let user_id = req.body.user_id;
   //if (!user_id) {
   //return res.status(400).send({ error: true, message: 'Please provide user_id' });
   //}
   //dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
  // if (error) throw error;
  // return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
   //});
   //});
//app.get('/API/employee/GetallEmployee/:id', function (req, res) {
  // let user_id = req.params.id;
   //if (!user_id) {
   //return res.status(400).send({ error: true, message: 'Please provide user_id' });
  // }
  // dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
   //if (error) throw error;
   //return res.send({ error: false, data: results[0], message: 'users list.' });
   //});
   //});







app.get('/API/employee/Getallemployee', function(req, res,next) {

   console.log("/API/employee/Getallemployee")
   var query = dbConn.query('SELECT * FROM employees',function(err,rows){
             console.log("err",err,"\n rows",rows);
      if(err){
          console.log(err);
          return next("Mysql error, check your query");
      }
      res.send(rows);

   });
});

app.put('/API/employee/updateemployee', function(req, res,next) {

   console.log("/API/employee/updateemployee")
    var sql ="UPDATE employees SET first_name = 'john' WHERE first_name = 'lala'";
    dbConn.query(sql, function (err, result) {
      if (err) throw err;
      //console.log(sql);
    });    
   
});
app.get('/API/employee/deleteemployee', function(req, res,next) {

   console.log("/API/employee/deleteemployee")
   var query = dbConn.query('SELECT * FROM employees',function(err,rows){
             console.log("err",err,"\n rows",rows);
      if(err){
          console.log(err);
          return next("Mysql error, check your query");
      }
      res.send(rows);

   });
});

}




















//app.put('/API/employee/getemployeebyid', function(req, res,next) {
  // let employees_id = req.body.employees_id;
   //let employees = req.body.employees;
   //if (!employees_id || !employees) {
   //console.log("/API/employee/getallemployee")
   //var query = dbConn.query("UPDATE users SET employees = ? WHERE id = ?", [employees, employees_id],function(err,rows){
     //        console.log("err",err,"\n rows",rows);
      //if(err){
        //  console.log(err);
         // return next("Mysql error, check your query");
      //}
//			            res.render('user',{title:"RESTful Crud Example",data:rows});
  //    res.send(rows);
   //});
//res.send("/API/employee/getallemployee");
//}
//});
