const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Hospital_Api');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"error in connecting the database"));

db.once('open', function(){
    console.log('successfully connected to Mongodb');
});

module.exports=db;