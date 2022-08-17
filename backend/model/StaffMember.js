const Joi = require('@hapi/joi');
exports.STAFFMEMBERPOSTPET_MODEL = Joi.object({
    petID: Joi.number().integer(),
    Name:Joi.string().required(),
    type: Joi.string().required(),
    breed: Joi.string().required(),
    color: Joi.string().required(),
    gender:Joi.string().required(),
    age: Joi.string().required(),
    about: Joi.string().required(),
    status: Joi.number().integer().required(),
    receivedate: Joi.date().required(),
  
 })