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