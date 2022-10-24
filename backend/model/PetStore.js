const Joi = require('@hapi/joi');

exports.PETSTORE_MODEL = Joi.object({
   
    Title: Joi.string().required(),
    Price: Joi.number().required(),
    Image: Joi.string(),
    Description: Joi.required()
 
 })

 exports.PETSTOREIN_MODEL = Joi.object({
   
    Item: Joi.string().required(),
    Price: Joi.number().required(),
    Quantity: Joi.number().required()
 
 })