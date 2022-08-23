const express = require('express');
const req = require('express/lib/request');

const PetStoreRoute = express.Router();
const PetStore_controller = require('../controller/PetStore_controller');
PetStoreRoute.post("/addNewEquipment",PetStore_controller.PostNewAdvertisement);



// const student_controller = require('../controllers/student_controller');

// AdminRoute.route("/")
//     .post( student_controller.student_register)
//     .get( student_controller.student_login)

// student_route.post("/", student_controller.student_register)
// student_route.get("/", student_controller.student_login)

module.exports = PetStoreRoute;