const joi = require("@hapi/joi");


const schema={
    employee:joi.object({
        first_name: joi.string.max(100).required(),
        last_name:joi.string.max(100).required(),
        email: joi.string.email().required(),
        phone: joi.number().integer().min(1000000000).message("Invalid mobile number").max(99999999999),
        organization:joi.string.max(300).required(),
        designation:joi.string().max(400).required(),
        salary:joi.number().integer().max().required(),
        status:joi.string().max(100).required(),
        is_deleted:joi.string().max().required(),
        created_at:joi.string().max().required(),
        update_at:joi.string().max().required()


    })
}
module.exports =schema;