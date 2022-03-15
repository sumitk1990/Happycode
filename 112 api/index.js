const express = require("express");

//create erpress app
const app = express();
 
//setup the server port
const port = process.env.PORT || 5000;

//define root route
app.get("/",(req,res)=>{
    res.send("hello World");
});

//import employee routes
//const emloyeeRoutes = require("./src/routes/employee.route");

//create employee routes
//app.use("/api/v1/employee",emloyeeRoutes);

require('./src/controllers/employee.controller.js')(app);

//listen to the porty
app.listen(port,()=>{
    console.log("express server is running at port", port);
})
