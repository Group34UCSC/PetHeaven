const express = require('express');
const req = require('express/lib/request');

const staffMemberRoute = express.Router();
const StaffMember_controller = require('../controller/Staffmember_controller');

staffMemberRoute.post('/postpet',StaffMember_controller.Staffmemberpostpet);
staffMemberRoute.post('/addnewpet',StaffMember_controller.Staffmemberaddpet);
staffMemberRoute.post('/updatemedicalstatus',StaffMember_controller.Staffmemberupdatemedicalstatus);
staffMemberRoute.post('/notifyadopter',StaffMember_controller.Staffmembernotifyadopter);
staffMemberRoute.get('/viewdonation',StaffMember_controller.Staffmemberviewdonation);
staffMemberRoute.get('/viewpets',StaffMember_controller.Staffmemberviewpets);
staffMemberRoute.get('/viewposts',StaffMember_controller.Staffmemberviewposts);
staffMemberRoute.get('/viewadoptees',StaffMember_controller.Staffmemberviewadoptees);
staffMemberRoute.get('/viewfeedback',StaffMember_controller.Staffmemberviewfeebacks);
staffMemberRoute.get('/viewmedicalstatus',StaffMember_controller.Staffmemberviewmedicalstatus);
staffMemberRoute.get('/viewmedicalstatusinjury',StaffMember_controller.Staffmemberviewmedicalstatusinjuries);
staffMemberRoute.get('/viewmedicalstatusother',StaffMember_controller.Staffmemberviewmedicalstatusother);
staffMemberRoute.post('/addnewadopter',StaffMember_controller.Staffmemberaddnewadopter);
staffMemberRoute.post('/deletepost/:Post_ID',StaffMember_controller.Staffmemberdeletepost);

staffMemberRoute.get('/viewadopterrequests',StaffMember_controller.Staffmemberviewadopterrequests);

staffMemberRoute.post('/acceptrequest/:Adopter_name',StaffMember_controller.Staffmemberacceptrequest);

staffMemberRoute.post('/postpetpost/:PetID',StaffMember_controller.Staffmemberpostpetpost);


staffMemberRoute.post('/responsefeedback/:adopter_id',StaffMember_controller.Staffmemberresponsefeedback);

module.exports = staffMemberRoute;