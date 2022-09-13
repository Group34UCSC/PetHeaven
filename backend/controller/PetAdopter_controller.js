// const {isEmpty}  = require('../utils/is_empty');
// const Joi = require('@hapi/joi');
// const conn = require('../service/db_service');
// const {CHECK_EMAIL,REGISTER_PETADOPTER} = require('../query/PetAdopter');
// const { PETADOPTER_MODEL } = require('../model/PetAdopter');
// const bcrypt = require('bcryptjs');
// const AppError = require('../utils/appError');


// exports.PetAdopter_register = (req,res,next)=>{
//     if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
//    //  res.status(200).json({
//    //      data: "Hi controller"
//    //  });

//     try{
//         const { error } = PETADOPTER_MODEL.validate(req.body);

//         if( error ) return next(new AppError(error.details[0].message,400)) ;

//         conn.query(CHECK_EMAIL , [req.body.email], async(err, data, feilds) =>{
//            if( err ) return next(new AppError(err,500)) ;
//            if( data.length ) return  next(new AppError("Email already used!",400)) ;
  
//            const salt = await bcrypt.genSalt(10);
//            const hashedValue = await bcrypt.hash(req.body.password, salt);
  
//            conn.query(REGISTER_PETADOPTER, [ [ req.body.name, req.body.age , req.body.rank, req.body.email, hashedValue ]], (err,data,feilds)=>{
//               if( err ) return next(new AppError(err,500));
  
//               res.status(201).json({
//                  data: "Student Registration Success!"
//               })
//            })
  
          
//         })
//      }
//      catch( err )
//      {
//         res.status(500).json({
//            error: err
//         })
//      }
// }

const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const conn = require('../service/db_service');
const {
   CHECK_EMAIL,
   REGISTER_PETADOPTER,
   ADOPT_REQUEST,
   FIND_APET,
   FIND_APET_BYTYPE,
   FIND_DOCTOR,
   FIND_PHARMACY,
   FIND_PETTOOLSTORE,
   APPOINT_DOCTOR
} = require('../query/PetAdopter');
const { PETADOPTER_MODEL, PETADOPTER_ADOPTREQUESTMODEL, } = require('../model/PetAdopter');
// const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');

exports.PetAdopter_adoptRequest=(req,res,next) => {
   
   if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   console.log("Sasinduwaa 111");
 //    const { error } = PETADOPTER_ADOPTREQUESTMODEL.validate(req.body);

 //    if ( error ) return next(new AppError(error.details[0].message,400));
   
   conn.query(ADOPT_REQUEST, [[ req.body.fullname,req.body.phonenumber,req.body.income,req.body.isanyPet,req.body.typeofPet,req.body.kidsinHome,req.body.additionalDetails]], (err,data,fields)=>{
      if(err) return next(new AppError(err,500));
         res.status(201).json({
            data:"Adopt request successfull!!"
         })
      })

   }

   catch( err ){
         res.status(500).json({
            error: err
         })
      }
}

exports.PetAdopter_Findapet=(req,res,next) => {
   if( isEmpty( req.data )) return next(new AppError("form data not found ",400));

   try{
   
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_APET,[req.body.type], (err,result)=>{
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}



exports.PetAdopter_Findapet_SearchPet=(req,res,next) => {
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_APET, (err,result)=>{
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}



exports.PetAdopter_FindPharmacy=(req,res,next) => {
   console.log('___CHECKPOINT___');
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_PHARMACY, (err,result)=>{
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}

exports.PetAdopter_FindPettoolstore=(req,res,next) => {
   console.log('___CHECKPOINT___');
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_PETTOOLSTORE, (err,result)=>{
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}

exports.PetAdopter_FindDoctors=(req,res,next) => {
   console.log('Destination reached');
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_DOCTOR, (err,result)=>{
            console.log("this is here");
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}

exports.PetAdopter_makeappoint=(req,res,next) => {
   if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   console.log("Sasinduwaa 111");
 //    const { error } = PETADOPTER_ADOPTREQUESTMODEL.validate(req.body);

 //    if ( error ) return next(new AppError(error.details[0].message,400));
   
   conn.query(APPOINT_DOCTOR, [[req.body.fullname,req.body.email,req.body.phonenumber,req.body.petname,req.body.symptoms,req.body.date,req.body.time,req.body.doctorid]], (err,data,fields)=>{
      if(err) return next(new AppError(err,500));
         res.status(201).json({
            data:"Appoint request successfull!!"
         })
      })

   }

   catch( err ){
         res.status(500).json({
            error: err
         })
      }
}


exports.PetAdopter_FindPharmacy=(req,res,next) => {
   console.log('Destination reached');
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_PHARMACY, (err,result)=>{
            console.log("this is here");
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}