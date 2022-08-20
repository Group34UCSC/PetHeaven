const Joi = require('@hapi/joi');

exports.PETSTORE_MODEL = Joi.object({
   
    Title: Joi.string().required(),
    Image: Joi.string().required(),
    Description: Joi.required()
 
 })