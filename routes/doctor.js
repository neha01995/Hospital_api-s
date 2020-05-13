const express = require('express');
const bycrypt = require('bcryptjs');


const router = express.Router();

const doctorController = require('../controllers/doctor_controllers');

router.get('/register',doctorController.register);
router.post('/register',doctorController.create);

router.get('/login', doctorController.signIn);

// register Handle
// router.post('/register',(req,res) => {
//     const { name, email, password , password2} =req.body;
//     let errors =[];

//     // check required fields
//     if(!name || !email || !password || !password2){
//         errors.push({msg:" Please fill all these fields"});
//     }
//     // if password does not match
//     if(password != password2){
//         errors.push({msg:" Password do not match"});
//     }
//     if(password.length<6){
//         errors.push({msg:" Password should be atleast 6 length"});
//     }

//     if(errors.length>0){
//         res.render('register',{
//             errors,
//             name,
//             email,
//             password,
//             password2
//         })
//     }else{
//         User.findOne({email:email})
//         .then( doctor =>{
//             if(doctor){
//                 // Doctor exists
//                 errors.push({msg:"email already exists"});
                
//                 res.render('register',{
//                     errors,
//                     name,
//                     email,
//                     password,
//                     password2
//                 }); 
//             }else{
//                 const newUser = new User({
//                     name,
//                     email,
//                     password
//                 });
//               // hash Password
//               bycrypt.genSalt(10,(err,salt)=>
//               bycrypt.hash(newUser.password , salt, (err,hash)=>{
//                   if(err) throw err;
//                   //set password to hashed
//                   newUser.password = hash;
//                   //save user
//                   newUser.save()
//                   .then(doctor =>{
//                       req.flash('success_msg','You are now Registered and can login');
//                       res.redirect('/users/login');
//                   })
//                   .catch(err => console.log(err));
//               })
//               )
//             }
//         });
        
//     }

// });

module.exports = router;