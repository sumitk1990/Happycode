var dbConn = require("../../config/db.config");
const EmployeeModel = require("../models/employee.model");
module.exports = function(app) {

//get all employee list
exports.getEmployeeList =(req,res)=>{

   // console.log("here all employees list");
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

//			            res.render('user',{title:"RESTful Crud Example",data:rows});
      res.send(rows);

   });
   //res.send("/API/employee/getallemployee");
});
}
app.get("API/employee/getAllEmployees",function(req, res,next) {

   console.log("/API/employee/getallemployee")
   var query = dbConn.query('SELECT * FROM employees',function(err,rows){
             console.log("err",err,"\n rows",rows);
      if(err){
          console.log(err);
          return next("Mysql error, check your query");
      }

//			            res.render('user',{title:"RESTful Crud Example",data:rows});
      res.send(rows);

   });
   //res.send("/API/employee/getallemployee");
});

   

















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
