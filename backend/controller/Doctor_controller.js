console.log("backend called");
const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const JWT = require('jsonwebtoken');
const conn = require('../service/db_service');
const {CHECK_EMAIL,REGISTER_USER, DELETE_USER} = require('../query/Admin');
const { SIGNUP_MODEL} = require('../model/Admin');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const AppError = require('../utils/appError');
const CLIENT_URL = "http://localhost:3000/";


                 exports.View_Accounts = (req,res,next)=>{

                  var SelectQuery= "SELECT * FROM consultation WHERE accept=0";
 
                  
                   
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