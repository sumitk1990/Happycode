const values = require("@hapi/joi/lib/values");
//const{employee}=require("./employee.schema");

module.exports={
    addEmployeeValidation:async(req,res,next)=>{
        const valve = await employee.validate(req.body);
        if (values.error){
            res.json({
                success:0,
                message:values.error.details[0].message
            })
        } else{
            next();
        }
    }
};