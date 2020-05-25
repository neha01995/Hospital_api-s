const mongoose=require('mongoose');


const patientSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique=true
    },
      // here is reference of doctor in patient schema
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },

    // here is reference of patient report in patient schema
    report:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Report'
    }]

}, {timestamps:true
});



const Patient=mongoose.model('Patient',patientSchema);

module.exports=Patient;