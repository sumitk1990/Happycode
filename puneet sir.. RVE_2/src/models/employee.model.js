// import the database
var dbConn = require("../../config/db.config");

var Employee =(employee)=>{
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email =employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status:1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

Employee.getAllEmployees = (result)=>{
    dbConn.query("SELECT * FROM employees",(err,res)=>{
        if(err){
            console.log("Error while fetching employess",err)
            result(null,err);
        }
        else
        {
             console.log("Employees fetched successfully");
           result(null,res);
      }
    });
module.exports =EmployeeMogel;

}