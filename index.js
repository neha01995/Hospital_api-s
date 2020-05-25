const express= require('express');
const cookieParser = require('cookie-parser');
const mongoose=require('mongoose');

// require passport
const passport = require('passport');

//require body-parser
const bodyParser= require('body-parser');
// creating a port
const expressLayouts = require('express-ejs-layouts');
const port=8000;
const app=express();

// connected with database which present in config folder
const db=require('./config/mongoose');

// body parser convert file into json format and act as a middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.urlencoded());
app.use(cookieParser());
const Doctor = require('./models/doctor');
const Patient = require('./models/patient');




// setting up routes path
app.use(expressLayouts);
app.use('/',require('./routes'));


// set view engine and views folder
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`server is running on port : ${port}`);
});
