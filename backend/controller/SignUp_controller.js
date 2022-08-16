console.log("backend called")
const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const JWT = require('jsonwebtoken');
const conn = require('../service/db_service');
const {CHECK_EMAIL,REGISTER_USER} = require('../query/SignUp');
const { SIGNUP_MODEL,SIGNIN_MODEL } = require('../model/SignUp');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const AppError = require('../utils/appError');
const CLIENT_URL = "http://localhost:3000/";


// const MAILGUN_APIKEY = "ef0c7a47b01cf05dea0b7f9b056001fe-2bab6b06-863a116e";


// const mailgun = require("mailgun-js");
// const DOMAIN = 'sandbox71790a0c69e543b9a9ec80f65ec71669.mailgun.org';
// const mg = mailgun({apiKey: MAILGUN_APIKEY, domain: DOMAIN});


//mail sender details
// const transporter = nodemailer.createTransport({
//    service : 'gmail',
//    port: 465,
//    secure: true,
//    auth:{
//       user:'hpet497@gmail.com',
//       pass: 'ftzitfvyuqehqdbr'

//    },
//    tls:{
//       rejectUnauthorized: false
//    }


// })

exports.User_SignIn = (req, res, next)=>
{
   if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
      const { error } = SIGNIN_MODEL.validate(req.body);
      if( error ) return next(new AppError(error.details[0].message,400)) ;
      conn.query(CHECK_EMAIL , [req.body.Email ], async(err, data, feilds) =>{
         if( err ) return next(new AppError(err,500)) ;
         if( !data.length ) return  next(new AppError("Email or Password Invalid!",401)) ;

         const isMatched = await bcrypt.compare(req.body.Password, data[0].Password);
         if(!isMatched) return  next(new AppError("Email or Password Invalid!",401)) ;

         const token = JWT.sign( {User_name: data[0].User_name, User_ID: data[0].User_ID}, "ucscucscucsc", {expiresIn: "1d"});

         res.header("auth-token",token).status(200).json({
            data: "Welcome to PetHeaven! ",
            token: token
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




exports.User_SignUp = (req,res,next)=>{
    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
    // res.status(200).json({
    //     data: "Hi controller"
    // });

    try{
        const { error } = SIGNUP_MODEL.validate(req.body);

        if( error ) return next(new AppError(error.details[0].message,400)) ;

        conn.query(CHECK_EMAIL , [req.body.Email], async(err, data, feilds) =>{
           if( err ) return next(new AppError(err,500)) ;
           if( data.length ) return  next(new AppError("Email already used!",400)) ;


         //   const JWT_ACC_ACTIVATE = accountactivatekey123;
         //   const token = jwt.sign([eq.body.name,req.body.email,req.body.rank],JWT_ACC_ACTIVATE,{expiresIn:'20m'})
           

            // const mail_data = {
               // from: 'PetHeaven@hello.com',
               // to: [req.body.email],
               // subject: 'Account Activation Link',
               // html:`
               //    <h2><b>Welcome to PetHeaven</b></h2>
               //    <h3>Please click on given link to activate your new PetHeaven Account</h3>
               //    <p>${CLIENT_URL/SignUp/activation/[req.body.email]/token}</p>
                  
               // `
            // };
            // mg.messages().send(mail_data, function (error, body) {
            //    // console.log(body);
            //    if( err ) return next(new AppError(err,500));
  
            //   res.status(201).json({
            //      data: "User Registration Success!"
            //   })
            // });
           

            

           
           const salt = await bcrypt.genSalt(10);
           const hashedValue = await bcrypt.hash(req.body.Password, salt);
           const email_token = crypto.randomBytes(64).toString('hex');

           //send verification mail to user
   //         var mailOptions = {

   //          from: '"Verify Your Email"<PetHeaven@hello.com>',
   //          to: [req.body.email],
   //          subject: 'Account Activation Link',
   //          html:`
   //             <h2><b>Hi ${req.body.User_name}! Welcome to PetHeaven</b></h2>
   //             <h3>Please click on given link to activate your new PetHeaven Account</h3>
   //             <a href="https://www.w3schools.com/tags/tag_a.asp">CLICK TO ACTIVATE YOUR ACCOUNT</a> `

   //       }

   //       transporter.sendMail(mailOptions, function(error, info) {
   //          if (error) {
   //              console.log(error);
   //              return;
   //          }
   //          console.log('Message sent');
   //          transporter.close();
   //      });
   //      exports.someAction = function (request, reply) {
   //       var postParams = request.body
   //   }

         //sending mails
         // await transporter.sendMail(mailOptions,function(err, info)
         
         // {
         //    if( err ) return next(new AppError(err,500));

         //   res.status(201).json({
         //      data: "We have sent an email with a confirmation link to your email address. In order to complete the sign-up process, please click the confirmation link."
         //   })
         // })


           conn.query(REGISTER_USER, [ [ hashedValue, req.body.Email , req.body.User_name, req.body.User_type, req.body.Email_verify, email_token, req.body.Profole_picture ]], (err,data,feilds)=>{
              if( err ) return next(new AppError(err,500));
  
              res.status(201).json({
                 data: "User Registration Success!"
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

{/* <a href="http://localhost:3000/SignUp/{$token}">CLICK TO ACTIVATE YOUR ACCOUNT</a>
                  <a href="' . CLIENT_URL . 'SignUp/activation' . '/' . {[req.body.email]} . '/' . {$token} . '">CLICK TO ACTIVATE YOUR ACCOUNT</a>'; */}