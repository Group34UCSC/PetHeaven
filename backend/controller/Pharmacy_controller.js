const {isEmpty}  = require('../utils/is_empty');
const conn = require('../service/db_service');
const { PHARMACY_MODEL } = require('../model/Pharmacy');
const {ADD_MEDICINE} = require('../query/Pharmacy');
const AppError = require('../utils/appError');

exports.AddMedicine=(req,res,next) => {
   //  console.log(req.file.filename)
    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
    const { error } = PHARMACY_MODEL.validate(req.body);
    if( error ) return next(new AppError(error.details[0].message,400)) ;
    console.log(req.body.Title);
 
    try{
    //  console.log("Sasinduwaa 111");
      console.log(req.body.Medicine);
    conn.query(ADD_MEDICINE, [[ req.body.Medicine,req.body.Quantity,req.body.Price]], (err,data,fields)=>{
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

