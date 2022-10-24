const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const conn = require('../service/db_service');
const {POST_PET, ADD_PET, UPDATE_MEDSTATUS, NOTIFY_ADOPTER, ADD_ADOPTER, POST_PETPOST } = require('../query/StaffMember');
const {STAFFMEMBERPOSTPET_MODEL, STAFFMEMBERADDPET_MODEL, STAFFMEMBERUPDATEMEDICAL_MODEL, STAFFMEMBERNOTIFYADOPTER_MODEL, STAFFMEMBERADDADOPTER_MODEL, STAFFMEMBERPOSTPETPOST_MODEL} = require('../model/Staffmember');
// const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');


exports.Staffmemberpostpet=(req,res,next) => {

    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
 
    try{
      
      //   const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);

      console.log('checkpoint');
      console.log(req.body.name);
      console.log(req.body.type);
      console.log(req.body.breed);
      console.log(req.body.image);
      //   if ( error ) return next(new AppError(error.details[0].message,400));
        conn.query(POST_PET, [[req.body.name,req.body.image,req.body.type,req.body.breed,req.body.color,req.body.gender,req.body.age,req.body.about,1,"2021.03.11"]], (err,data,fields)=>{
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

 
exports.Staffmemberaddpet=(req,res,next) => {

  if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

  try{
    
    //   const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);

    console.log('checkpoint');
    console.log(req.body.name)
    console.log(req.body.file);
    console.log(req.body.type);
    console.log(req.body.breed);
    //   if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(ADD_PET, [[req.body.name,req.body.image,req.body.type,req.body.breed,req.body.color,req.body.gender,req.body.age,req.body.about,1,req.body.receivedate]], (err,data,fields)=>{
      if(err) return next(new AppError(err,500));

      res.status(201).json({
          data:"Pet add successfull!!"
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


exports.Staffmemberupdatemedicalstatus=(req,res,next) => {

  if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

  try{
    
    //   const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);

    console.log('checkpoint');
    console.log(req.body.name)
    console.log(req.body.date);
    console.log(req.body.type);
    console.log(req.body.status);
    //   if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(UPDATE_MEDSTATUS, [[req.body.name,req.body.date,req.body.type,req.body.status]], (err,data,fields)=>{
      if(err) return next(new AppError(err,500));

      res.status(201).json({
          data:"Update medical status successfully!!"
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


exports.Staffmembernotifyadopter=(req,res,next) => {

  if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

  try{
    
    //   const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);

    console.log('checkpoint');
    console.log(req.body.name)
    console.log(req.body.contact);
    console.log(req.body.message);
    console.log(req.body.status);
    //   if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(NOTIFY_ADOPTER, [[req.body.name,req.body.contact,req.body.message,req.body.status]], (err,data,fields)=>{
      if(err) return next(new AppError(err,500));

      res.status(201).json({
          data:"Notify adopter successfully!!"
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

exports.Staffmemberviewdonation = (req,res,next)=>{

  var SelectQuery= "SELECT * FROM donation";
   
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
  
  exports.Staffmemberviewpets = (req,res,next)=>{

    var SelectQuery= "SELECT * FROM pet WHERE status=1";
     
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
  
  exports.Staffmemberviewposts = (req,res,next)=>{



    var SelectQuery= "SELECT pet.name, pet.image, pet.breed, pet.color, pet.gender, pet.age, pet.about, petpost.postID, pet.petID FROM petpost INNER JOIN pet ON petpost.petID = pet.petID WHERE petpost.status=1";
     
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

  exports.Staffmemberviewadoptees = (req,res,next)=>{

    // var SelectQuery= "SELECT * FROM pet WHERE status='3'";

    var SelectQuery= "SELECT pet.name, pet.image, pet.breed, pet.color, pet.gender, pet.age, adopter.firstName, adopter.lastName, adopter.address, adopter.mobile, adopter.kids, adopter.income, adopter.adoptees, adoptee.adoptedDate, adoptee.adoptedAge FROM adoptee INNER JOIN pet ON adoptee.petID = pet.petID INNER JOIN adopter ON adopter.adopterID = adoptee.adopterID";
     
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

  exports.Staffmemberviewfeebacks = (req,res,next)=>{

    var SelectQuery= "SELECT * FROM feedback WHERE status='1'";
     
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

  exports.Staffmemberviewmedicalstatus = (req,res,next)=>{

    var SelectQuery= "SELECT * FROM medicalstatus WHERE type='V'";
     
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

  exports.Staffmemberviewmedicalstatusinjuries = (req,res,next)=>{

    var SelectQuery= "SELECT * FROM medicalstatus WHERE type='I'";
     
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

  exports.Staffmemberviewmedicalstatusother = (req,res,next)=>{

    var SelectQuery= "SELECT * FROM medicalstatus WHERE type='O'";
     
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

  exports.Staffmemberaddnewadopter=(req,res,next) => {

    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
  
    try{
      
      //   const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);
  
      console.log('checkpoint');
      //   if ( error ) return next(new AppError(error.details[0].message,400));
        conn.query(ADD_ADOPTER, [[req.body.name,req.body.contact,req.body.income,req.body.pettype,req.body.petdetail,,req.body.kids]], (err,data,fields)=>{
        if(err) return next(new AppError(err,500));
  
        res.status(201).json({
            data:"Adopter added successfully!!"
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

  

  exports.Staffmemberresponsefeedback = (req,res,next)=>{
                
    const name = req.params.adopter_id;
    const msg = req.params.adopter_res;
    console.log(req.params)
    const sqlDelete = `UPDATE feedback SET status=0 response=${msg} WHERE feedbackID =${name}`;
  
    conn.query(sqlDelete, name, (err, result)=>{
     if (err) {
       console.log(err);}
       else{
          res.send("adopter response");
       }
 


});
}

exports.Staffmemberdeletepost = (req,res,next)=>{
                
  const name = req.params.Post_ID;
  console.log(req.params)
  const sqlDelete = `UPDATE petpost SET status=0 WHERE postID =${name}`;

  conn.query(sqlDelete, name, (err, result)=>{
   if (err) {
     console.log(err);}
     else{
        res.send("post delete");
     }



});
}

exports.Staffmemberpostpetpost = (req,res,next)=>{
                
  if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

  try{
    
    //   const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);

    console.log('checkpoint');
    // console.log(req.body.name)
    // console.log(req.body.file);
    // console.log(req.body.type);
    // console.log(req.body.breed);
    //   if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(POST_PETPOST, [[req.body.petID,0]], (err,data,fields)=>{
      if(err) return next(new AppError(err,500));

      res.status(201).json({
          data:"Pet add successfull!!"
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
