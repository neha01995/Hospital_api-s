module.exports.register_patient= function(req,res){
    return res.render('register',{
        title:"Registered Patient"
    });
}

module.exports.patient_report= function(req,res){
    return res.render('patient_report',{
        title:"Patient Report"
    });
}

module.exports.all_reports= function(req,res){
    return res.render('all_reports',{
        title:"All Patient Reports"
    });
}