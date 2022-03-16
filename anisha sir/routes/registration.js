const express = require("express");
const router = express.Router();
const mysql = require("mysql2")
const con =require("../config/data");

//router.get("/temporaryRegistration",(req,res)=>{
  //res.send(".......&&&&&&&&........PAGAL I LOVE YOU......$$$$$$$.......");
//});
/**
 * @swagger
 * components:
 *   schemas:
 *     registration:
 *       type: object
 *       required:
 *         - VIN
 *         - chasis
 *         - date_time
 *         - userId
 *         - deviceId
 *         - deviceLocation
 *         - transaction_nbr
 *         - transaction_name
 *         - statu
 *         - approved
 *       properties:
 *         VIN:
 *           type: string
 *           description: To register vehicles that are under a custodian of dealer, importer, manufacturer or assemblerbefore transferred to its user
 *         chasis:
 *           type: string
 *           description: Same registration number will be used while Permamnent Registration/Adding Owner details.
 *         date_time :
 *           type: string
 *           description: Should also provide functionality to upload scanned documents
 *         userId :
 *           type: string
 *           description: Should also provide functionality to upload scanned documents
 *         deviceId :
 *           type: string
 *           description: Should also provide functionality to upload scanned documents
 *         deviceLocation :
 *           type: string
 *           description: Should also provide functionality to upload scanned documents
 *         transaction_nbr :
 *           type: string
 *           description: Should also provide functionality to upload scanned documents
 *         transaction_name :
 *           type: string
 *           description: Should also provide functionality to upload scanned documents
 *         statu :
 *           type: string
 *           description: Should also provide functionality to upload scanned documents
 *         approved:
 *           type: string
 *           description: Should also provide functionality to upload scanned documents
 *       example:
 *          VIN	string
 *          chasis	string
 *          date_time	string  
 *          userId	number
 *          deviceId	number
 *          deviceLocation	string 
 *          transaction_nbr	string
 *          transaction_name	string
 *          status	string 
 *          approved	string
 */
/**
  * @swagger
  * tags:
  *   name: registration
  *   description: Should also provide functionality to upload scanned documents
  */
/**
 * @swagger
 * /registration:
 *   get:
 *     summary: Returns the list of all the registration
 *     tags: [registration]
 *     responses:
 *       200:
 *         description: The list of the registration
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/registration'
 */

router.get('/temporaryRegistration', function(req, res,next) {

    console.log("temporaryRegistration")
    var query = con.query('SELECT * FROM registration ',function(err,rows){
              console.log("err",err,"\n rows",rows);
       if(err){
           console.log(err);
           return next("Mysql error, check your query");
       }
       res.send(rows);
    });
 });

/**
 * @swagger
 * /registration/{id}:
 *   delete:
 *     summary: Remove the registration by id
 *     tags: [registration]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The registration id
 * 
 *     responses:
 *       200:
 *         description: The registration was deleted
 *       404:
 *         description: The registration was not found
 */

 router.get("/temporaryRegistration/:id",(req,res,next)=>{
    //console.log("temporaryRegistration")
    var query =con.query("SELECT * FROM registration WHERE userId =?",[req.params.id],(err,rows)=>{
      if(err) {
         console.log(err);
         return next ("Mysql error, check your query");
      }
      res.send(rows);
    })
  })


/**
 * @swagger
 * /registration:
 *   post:
 *     summary: Create a new registration
 *     tags: [registration]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/registration'
 *     responses:
 *       200:
 *         description: The registration was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/registration'
 *       500:
 *         description: Some server error
 */

router.post("/temporaryRegistration",(req,res,next)=>{
    //console.log(req.body)
    //res.send(req.body)

    let data = 
    {
        VIN:req.body.VIN,
        chasis:req.body.chasis,
        date_time:req.body.date_time,
        userId:req.body.userId,
        deviceId:req.body.deviceId,
        devicelocation:req.body.devicelocation,
        transaction_nbr:req.body.transaction_nbr,
        transaction_name:req.body.transaction_name,
        status: req.body.status,
        approved:req.body.approved
    };
    let sql ="INSERT INTO registration SET?";
    let query = con.query(sql,data,(err,rows)=>{
      if(err) throw err;
      console.log(rows);
      res.send(rows)
    });
  });



/**
 * @swagger
 * /registration/{id}:
 *  put:
 *    summary: Update the registration by the id
 *    tags: [registration]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The registration id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/registration'
 *    responses:
 *      200:
 *        description: The registration was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/registration'
 *      404:
 *        description: The registration was not found
 *      500:
 *        description: Some error happened
 */

router.put('/temporaryRegistration', function(req, res,next) {
    console.log(req.body);
    var query = con.query("UPDATE registration SET transaction_name = '?' WHERE  userId = '?';",function(err,rows){
              console.log("err",err,"\n rows",rows);
       if(err){
           console.log(err);
           //return next("Mysql error, check your query");
       }
       res.send(rows);
    });
 });
 








router.get("/temporaryRegistration/:id",(req,res)=>{
    const registration =req.app.db.get("registration").find({id: req.params.id}).value()
    res.send(registration)
})

router.post("/temporaryRegistration",(req,res)=>{
    try{
        const registration = req.app.db.get("registration").push(registration).write()
    } catch(error) {
        return res.status(500).send(error)
   }
})

router.put("/temporaryRegistration/:id",(req,res)=>{
    try{
        req.app.db.get("registration").find({id:req.params.id})
    } catch(error){
        return res.status(500).send(error)
    }

})

router.delete("/temporaryRegistration/:id",(req,res)=>{
    req.app.db.get("registration").remove({id:req.params.id}),write();
    res.sendStatus(200);
})

module.exports= router;