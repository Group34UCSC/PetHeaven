// const express = require('express');
// const req = require('express/lib/request');

// const PetAdopterRoute = express.Router();
// const PetAdopter_controller = require('../controller/PetAdopter_controller');
// PetAdopterRoute.post("/",PetAdopter_controller.PetAdopter_register);



// // const student_controller = require('../controllers/student_controller');

// // PetAdopterRoute.route("/")
// //     .post( student_controller.student_register)
// //     .get( student_controller.student_login)

// // student_route.post("/", student_controller.student_register)
// // student_route.get("/", student_controller.student_login)

// module.exports = PetAdopterRoute;

const express = require('express');
const req = require('express/lib/request');

const PetAdopterRoute = express.Router();
const PetAdopter_controller = require('../controller/PetAdopter_controller');
PetAdopterRoute.post('/findapet/adoptrequestform',PetAdopter_controller.PetAdopter_adoptRequest);
PetAdopterRoute.get('/findapet',PetAdopter_controller.PetAdopter_Findapet);
PetAdopterRoute.get('/findapet/searchpet',PetAdopter_controller.PetAdopter_Findapet_SearchPet);
PetAdopterRoute.get('findapet/findpharmacy',PetAdopter_controller.PetAdopter_FindPharmacy);
PetAdopterRoute.get('/findapet/finddoctors',PetAdopter_controller.PetAdopter_FindDoctors);
PetAdopterRoute.get('/findapet/findpharmacy',PetAdopter_controller.PetAdopter_FindPharmacy);
PetAdopterRoute.get('/findapet/findpettoolstore',PetAdopter_controller.PetAdopter_FindPettoolstore);
PetAdopterRoute.post('/findapet/channeldoctor/requestappoint',PetAdopter_controller.PetAdopter_makeappoint);



// PetAdopterRoute.post("/",PetAdopter_controller.PetAdopter_register);



// // const student_controller = require('../controllers/student_controller');

// // PetAdopterRoute.route("/")
// //     .post( student_controller.student_register)
// //     .get( student_controller.student_login)

// // student_route.post("/", student_controller.student_register)
// // student_route.get("/", student_controller.student_login)
module.exports = PetAdopterRoute;