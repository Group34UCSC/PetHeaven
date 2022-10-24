const Joi = require('@hapi/joi');

exports.DOCTOR_MODEL = Joi.object({
   
    Medicine: Joi.string().required(),
    Dosage: Joi.string(),
    Duration: Joi.string(),
    // MFD: Joi.required(),
    // Valid_period: Joi.required()
 
 })