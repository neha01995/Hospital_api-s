const express = require('express');


const router = express.Router();
const passport=require('passport');

const doctorController = require('../controllers/doctor_controllers');

router.post('/register',doctorController.Register_Doctor);

router.post('/login',doctorsController.login);
router.post('/register_patient',passport.authenticate('jwt',{session:false}),doctorsController.Register_Patient);



module.exports = router;