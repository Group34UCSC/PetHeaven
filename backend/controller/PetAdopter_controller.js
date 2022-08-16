const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const conn = require('../service/db_service');
const {CHECK_EMAIL,REGISTER_PETADOPTER,ADOPT_REQUEST ,FIND_APET} = require('../query/PetAdopter');
const { PETADOPTER_MODEL, PETADOPTER_ADOPTREQUESTMODEL, } = require('../model/PetAdopter');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');


exports.PetAdopter_register = (req,res,next)=>{
    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
    // res.status(200).json({
    //     data: "Hi controller"
    // });

    try{
        const { error } = PETADOPTER_MODEL.validate(req.body);

        if( error ) return next(new AppError(error.details[0].message,400)) ;

        conn.query(CHECK_EMAIL , [req.body.email], async(err, data, feilds) =>{
           if( err ) return next(new AppError(err,500)) ;
           if( data.length ) return  next(new AppError("Email already used!",400)) ;
  
           const salt = await bcrypt.genSalt(10);
           const hashedValue = await bcrypt.hash(req.body.password, salt);
  
           conn.query(REGISTER_PETADOPTER, [ [ req.body.name, req.body.age , req.body.rank, req.body.email, hashedValue ]], (err,data,feilds)=>{
              if( err ) return next(new AppError(err,500));
  
              res.status(201).json({
                 data: "Student Registration Success!"
              })
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

exports.PetAdopter_adoptRequest=(req,res,next) => {
   let {name}=req.body
   console.log(name)
   if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   // try{
   // const { error } = PETADOPTER_ADOPTREQUESTMODEL.validate(req.body);
   // console.log("Check error");

   // if ( error ) return next(new AppError(error.details[0].message,400));
   // conn.query(ADOPT_REQUEST, [[ req.body.fullname, req.body.phonenumber, req.body.income,req.body.isanyPet,req.body.typeofPet,req.body.kidsinHome,req.body.additionalDetails]], (err,data,fields)=>{
   //    if(err) return next(new AppError(err,500));

   //    res.status(201).json({
   //       data:"Adopt request successfull!!"
   //    })
   // })

   // }

   // catch( err )
   //   {
   //      res.status(500).json({
   //         error: err
   //      })
   //   }

}

exports.PetAdopter_Findapet=(req,res,next) => {

   if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   if ( error ) return next(new AppError(error.details[0].message,400));
   conn.query(FIND_APET, (err,data,fields)=>{
      if(err) return next(new AppError(err,500));

      if(data) return data[fields];
   })

   }
   catch( err )
     {
        res.status(500).json({
           error: err
        })
     }

}

