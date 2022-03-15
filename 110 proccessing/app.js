const express = require("express");
const mysql = require("mysql2")
const app = express();
const bodyparser = require("body-parser");
const employeeRouter =require("./routes/employee");



app.use("/employee",employeeRouter);
app.use(bodyparser.json());
app.listen(4000,console.log("Mai Pagal hu"));

