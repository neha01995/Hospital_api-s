const express= require('express');

const passport=require('passport');
const router= express.Router();
const patientController = require('../controllers/patient_controllers');



router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),PatientsController.createReport);
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),PatientsController.get_All_Reports);
router.get('/reports/:status',passport.authenticate('jwt',{session:false}),PatientsController.status);


module.exports= router;