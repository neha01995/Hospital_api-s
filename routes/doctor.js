const express = require('express');

const router = express.Router();

const doctorController = require('../controllers/doctor_controllers');

router.get('/register',doctorController.register);
router.get('/login', doctorController.signIn);

module.exports = router;