const Doctor = require('../models/doctor');

module.exports.register = function(req, res){
    return res.render('register', {
        title: "Registration"
    });
}

//sign in
module.exports.signIn = function(req, res){
    return res.render('login', {
        title: "login"
    });
}

module.exports.create= function(req,res){
    if(req.body.password != req.body.password2){
        return res.redirect('back');
    }
    Doctor.findOne({email:req.body.email} , function(err,doctor){
        if(err){
            console.log('error in finding doctor to register the doctor');
            return;
        }
        if(!doctor){
            Doctor.create(req.body, function(err,doctor){
                console.log('error in creating doctor to register the doctor');
                return; 
            });
            return res.redirect('/doctor/login');

        }else{
            return res.redirect('back');
        }

    });
}