const mongoose=require('mongoose');

//mongoose connection
mongoose.connect('mongodb://localhost/Hospital_Api');
const db=mongoose.connection;

// if error on bind the data to the database
db.on('error',console.error.bind(console,"error in connecting the database"));


// if everything fine sucessfully connected to the database
db.once('open', function(){
    console.log('successfully connected to Mongodb');
});

module.exports=db;