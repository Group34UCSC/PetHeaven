const {isEmpty}  = require('../utils/is_empty');
// const Joi = require('@hapi/joi');
const conn = require('../service/db_service');
const { PETSTORE_MODEL } = require('../model/PetStore');
const {POST_NEW_EQUIPMENT} = require('../query/PetStore');
// const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');


exports.PostNewAdvertisement=(req,res,next) => {
   
    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
    const { error } = PETSTORE_MODEL.validate(req.body);
    if( error ) return next(new AppError(error.details[0].message,400)) ;

 
    try{
    //  console.log("Sasinduwaa 111");
//    console.log(req.body.Title);
    
    conn.query(POST_NEW_EQUIPMENT, [[ req.body.Title,req.body.Image,req.body.Description]], (err,data,fields)=>{
       if(err) return next(new AppError(err,500));
       console.log("Sasinduwaa 111");
       res.status(201).json({
          data:"Post new advertisement successfull!!"
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