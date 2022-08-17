const express = require('express');
const req = require('express/lib/request');

const staffMemberRoute = express.Router();
const StaffMember_controller = require('../controller/Staffmember_controller');

staffMemberRoute.post('/postpet',StaffMember_controller.Staffmemberpostpet);


module.exports = staffMemberRoute;