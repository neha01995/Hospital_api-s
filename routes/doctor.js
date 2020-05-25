const express = require('express');

//router path
const router = express.Router();
const passport=require('passport');

// doctors controller
const doctorController = require('../controllers/doctor_controllers');

// doctor can register by this route(/doctor/register)
router.post('/register',doctorController.Register_Doctor);

// doctor can log in by this route(/doctor/login)
router.post('/login',doctorController.login);

// doctor can register the patient in this route(/doctor/register_patient)
router.post('/register_patient',passport.authenticate('jwt',{session:false}),doctorController.Register_Patient);



module.exports = router;