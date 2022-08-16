const express = require('express');
const req = require('express/lib/request');

const staffMemberRoute = express.Router();
const StaffMember_controller = require('../controller/Staffmember_controller');
// PetAdopterRoute.post("/",PetAdopter_controller.PetAdopter_register);



// const student_controller = require('../controllers/student_controller');

// PetAdopterRoute.route("/")
//     .post( student_controller.student_register)
//     .get( student_controller.student_login)

// student_route.post("/", student_controller.student_register)
// student_route.get("/", student_controller.student_login)


staffMemberRoute.post('/postpet',StaffMember_controller.Staffmemberpostpet);


module.exports = staffMemberRoute;