const express= require('express');

//used passport for authentication
const passport=require('passport');
const router= express.Router();
// fetch the patient controller
const patientController = require('../controllers/patient_controllers');


// check report, all reports and status
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patientController.createReport);
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),patientController.get_All_Reports);
router.get('/reports/:status',passport.authenticate('jwt',{session:false}),patientController.status);


module.exports= router;