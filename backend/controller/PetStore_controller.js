const {isEmpty}  = require('../utils/is_empty');
// const Joi = require('@hapi/joi');
const conn = require('../service/db_service');
const { PETSTOREIN_MODEL } = require('../model/PetStore');
const {POST_NEW_EQUIPMENT} = require('../query/PetStore');
const {ADD_ITEM} = require('../query/PetStore');
// const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');
const multer = require('multer');
const path = require('path');



exports.PostNewAdvertisement=(req,res,next) => {
   // console.log("nnnnnnnnnn");
    console.log("GGSS",req.body.Image)
    console.log("kk",req.body.Title);
   //  if( isEmpty( req.body )) 
   //  {
   //    console.log("Empty")
   //    return next(new AppError("form data not found ",400));
   //  }
   //  const { error } = PETSTORE_MODEL.validate(req.body);
   //  if(error) 
   //  {
   //    return next(new AppError(error.details[0].message,400)) ;
   //    console.log(req.body.Title);
   //  }

    try
    {
     console.log("Sasinduwaa 111");
   //  var data = {
   //    Tool_ID: Tool_ID,
   //    Title: req.body.Title,
   //    Price : req.body.Price,
   //    Image: req.file.filename,
   //    Description: req.body.Description
   //  }
   console.log(req.body.Title);
      // const Image =req.file.filename;
      // conn.query(POST_NEW_EQUIPMENT, [[ req.body.Title,req.body.Price,Image,req.body.Description]]
    conn.query(POST_NEW_EQUIPMENT, [[ req.body.Title,req.body.Price,req.body.Image,req.body.Description]], (err,data,fields)=>{
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

 exports.View_petTools = (req,res,next)=>{

   var SelectQuery= "SELECT * FROM pettoolinventory ";

   
    
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

   exports.Edit_Advertisement = (req,res,next)=>{

      var EditQuery= "SELECT * FROM pettoolinventory  ";
   
      
       
             conn.query(EditQuery, function (err,result){
              if( err ) {
               console.log(err);
               res.send("Unable to get the comments");
              }
              else{
               res.send(result);
              }
   
             })
   
       
      }

      exports.AddItem=(req,res,next) => {
         console.log(req.body.params.Item);
          if( isEmpty( req.body.params )) return next(new AppError("form data not found ",400));
          const { error } = PETSTOREIN_MODEL.validate(req.body.params);
          if( error ) return next(new AppError(error.details[0].message,400)) ;
          
       
          try{
          //  console.log("Sasinduwaa 111");
            console.log(req.body.params.Item);
            conn.query(ADD_ITEM, [[ req.body.params.Item,req.body.params.Quantity,req.body.params.Price]], (err,data,fields)=>{
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

       exports.sendSMSNotifications = (receiver,body) => {
         try{
             axios.get(`https://www.textit.biz/sendmsg?id=94765282976&pw=4772&to=${receiver}&text=${body}`).then(response => {
                 console.log("Hello");
             });     
         }
         catch (err){
             res.status(500).json({
                 error : err
             })
         }
       }