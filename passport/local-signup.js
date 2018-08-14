const db = require('mongoose');
const SignupLocalStrategy = require('passport-local').Strategy;


module.exports = new SignupLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    console.log("email is what on the local-signup: "+email);
    console.log("password is what on the local-signup: "+password);
    const userData = {
        email: email.trim(),
        password: password.trim(),
        name: req.body.name.trim()
    };

    const newUser = new db.User(userData);
    console.log("userData is what on the local-signup: "+userData.email);
    console.log("userData is what on the local-signup: "+userData.password);
    console.log("userData is what on the local-signup: "+userData.name);
    newUser.save((err) => {
        if (err) {return done(err);}
        return done(null);
    });
});