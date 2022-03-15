const express = require("express");
const app = express();
const bodyparser = require("body-parser")

app.use(bodyparser.json())

require('./src/controllers/employee.controller.js,')(app);



app.get("/",(req,res)=>{
    res.send(".......&&&&&&&&........I AM PAGAL......$$$$$$$.......");
});

app.listen(5000,()=>{
    console.log("express server is running at port", 5000);
})
