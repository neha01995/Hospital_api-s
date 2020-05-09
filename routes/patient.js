const express= require('express');
const router= express.Router();
const patientController = require('../controllers/patient_controllers');
router.get('/register',patientController.register_patient);

router.get('/all_reports',patientController.all_reports);
router.get('/patient_report',patientController.patient_report);

module.exports= router;