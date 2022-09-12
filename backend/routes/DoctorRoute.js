const express = require('express');

const DoctorRoute = express.Router();
const Doctor_controller = require('../controller/Doctor_controller');
// DoctorRoute.post("/Create",Doctor_controller.Create_Accounts);
// DoctorRoute.post("/Delete/:user_id",Doctor_controller.Delete_Accounts);
DoctorRoute.get("/View_Appointment",Doctor_controller.View_Appointment);
DoctorRoute.post("/Consultation_accept",Doctor_controller.Consultation_accept);


module.exports = DoctorRoute;



