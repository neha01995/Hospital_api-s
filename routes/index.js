const express= require('express');
const router = express.Router();

console.log('router loaded');

router.use('/doctor',require('./doctor'));
router.use('/patient',require('./patient'));


module.exports= router;