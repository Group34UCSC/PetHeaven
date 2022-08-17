const Joi = require('@hapi/joi');

exports.SIGNUP_MODEL = Joi.object({
   //  User_ID: Joi.string(),
    pwd: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    user: Joi.string().min(3).max(100).required(),
    // User_type: Joi.string().required(),
    // Email_verify:Joi.number().required(),
    // Email_verify_token: Joi.string().required(),
    // Profole_picture: Joi.string(),
     
 })

 

//  {
//     "Password":"Nimal@123",
//     "Email":"sasndaruwangamage1997@gmail.com",
//     "User_name": "sasindu",
//     "User_type": "admin",
//     "Email_verify":1,
//     "Email_verify_token":"1jhghkhkh",
//     "Profole_picture":"dfdf"
    
// }
