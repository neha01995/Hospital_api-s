const express= require('express');
// const mongoose=require('mongoose');
// creating a port
const port=8000;
const app=express();

// const db=require('./config/mongoose');

// setting up routes path
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
