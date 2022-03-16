const express = require("express");
const cors = require("cors");
const low =require("lowdb");
const mysql = require("mysql2");
const bodyparser = require("body-parser")
const swaggerUI= require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const registrationRouter =require("./routes/registration")
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({registration:[]}).write();
const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Temporary Registration of Vehicle",
            version:"1.0.0",
            description:"To register vehicles that are under a custodian of dealer, importer, manufacturer or assemblerbefore transferred to its user"
        },
        servers:[
            {
              url: "http://localhost:5000",
        },
    ],   
    },
    apis:["./routes/*.js"]
};

const specs =swaggerJsDoc(options);
const app = express();
app.use(bodyparser.json())
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs));
app.db =db;
app.use(cors());
app.use(express.json());
app.use("/api/v1.0/VR/registration",registrationRouter);




app.listen(5000,console.log("........www..........I AM PAGAL.......5000............"))