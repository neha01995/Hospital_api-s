const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;

// extract the passport jwt strategy
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');

// options to generate a token and secret key
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'hospital_api'
}
passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){
    
    // find out the doctor by payload id
    Doctor.findById(jwtPayLoad._id, function(err, doctor){
        if (err){console.log('Error in finding the user from JWT'); return;}

        if (doctor){
            return done(null, doctor);
        }else{
            return done(null, false);
        }
    })

}));
module.exports = passport;