const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const conn = require('../service/db_service');
const {POST_PET } = require('../query/StaffMember');
const {STAFFMEMBERPOSTPET_MODEL } = require('../model/Staffmember');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');


exports.Staffmemberpostpet=(req,res,next) => {

    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
 
    try{
       console.log(req.body.name);
        const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);

 
        if ( error ) return next(new AppError(error.details[0].message,400));
        conn.query(POST_PET, [[req.body.Name, req.body.type,req.body.breed,req.body.color,req.body.gender,req.body.age,req.body.about,req.body.status,req.body.receivedate]], (err,data,fields)=>{
        if(err) return next(new AppError(err,500));
 
        res.status(201).json({
            data:"Pet post successfull!!"
        })
    })
 
    }
 
    catch( err )
      {
         res.status(500).json({
            error: err
         })
      }
 
 }