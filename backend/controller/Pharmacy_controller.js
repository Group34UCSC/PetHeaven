// import Axios from 'axios';

const {isEmpty}  = require('../utils/is_empty');
const conn = require('../service/db_service');
const { PHARMACY_MODEL } = require('../model/Pharmacy');
const {ADD_MEDICINE} = require('../query/Pharmacy');
const AppError = require('../utils/appError');

exports.AddMedicine=(req,res,next) => {
   console.log(req.body.params.Medicine);
    if( isEmpty( req.body.params )) return next(new AppError("form data not found ",400));
    const { error } = PHARMACY_MODEL.validate(req.body.params);
    if( error ) return next(new AppError(error.details[0].message,400)) ;
    
 
    try{
    //  console.log("Sasinduwaa 111");
      console.log(req.body.params.Medicine);
    conn.query(ADD_MEDICINE, [[ req.body.params.Medicine,req.body.params.MFD,req.body.params.EXP,req.body.params.Quantity,req.body.params.Price]], (err,data,fields)=>{
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

 exports.ViewPrescription = (req,res,next)=>{

   var SelectQuery= "SELECT * FROM temppres";

   // var SelectQuery = "SELECT temppres.Medicine, temppres.Dosage, temppres.Duration, SUM(pharmacyinventory.Quantity)
   // FROM temppres
   // INNER JOIN pharmacyinventory ON temppres.Medicine = pharmacyinventory.Medicine GROUP BY pharmacyinventory.Medicine";


    
          conn.query(SelectQuery, function (err,result){
           if( err ) {
            console.log(err);
            res.send("Unable to get the comments");
           }
           else{
            res.send(result);
           }

          })

    
   }

   exports.viewInventory = (req,res,next)=>{

      var SelectQuery= "SELECT * FROM pharmacyinventory";
   
             conn.query(SelectQuery, function (err,result){
              if( err ) {
               console.log(err);
               res.send("Unable to get the comments");
              }
              else{
               res.send(result);
              }
   
             })
   
       
      }

      

      // exports.sendSMSNotifications = (receiver,body) => {
      //    try{
      //        Axios.get(`https://www.textit.biz/sendmsg?id=94765282976&pw=4772&to=${receiver}&text=${body}`).then(response => {
      //            console.log("Hello");
      //        });     
      //    }
      //    catch (err){
      //        res.status(500).json({
      //            error : err
      //        })
      //    }
      //  }