const express= require('express');
const app=express();

const mongoose=require('mongoose');

//require body-parser
const bodyParser= require('body-parser');

// body parser convert file into json format and act as a middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// creating a port
const port=8000;

// connected with database which present in config folder
const db=require('./config/mongoose');

// require passport
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

// initilize passport
app.use(passport.initialize());

// setting up routes path
app.use('/',require('./routes'));


// listen the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`server is running on port : ${port}`);
});
