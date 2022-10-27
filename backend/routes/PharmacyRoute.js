const express = require('express');
const PharmacyRoute = express.Router();


const Pharmacy_controller = require('../controller/Pharmacy_controller');
PharmacyRoute.post('/inventory/AddStock',Pharmacy_controller.AddMedicine);
PharmacyRoute.get('/viewPrescription',Pharmacy_controller.ViewPrescription);
PharmacyRoute.get('/viewInventory',Pharmacy_controller.viewInventory);
// PharmacyRoute.post('/inventory/SendMsg',Pharmacy_controller.sendSMSNotifications);
// PharmacyRoute.post('/inventory/updateInventory',Pharmacy_controller.UpdateStocks);

module.exports = PharmacyRoute;