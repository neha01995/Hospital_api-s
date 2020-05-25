const mongoose=require('mongoose');

// created doctor schema 
const doctorSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },  
    
    // here is patient ref in doctor schema .
    patient:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }]

}, {timestamps:true
});

const Doctor=mongoose.model('Doctor',doctorSchema);

module.exports=Doctor;