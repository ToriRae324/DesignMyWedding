const User = require('mongoose').model('User');
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

    const newUser = new User(userData);
    console.log("userData is what on the local-signup: "+userData.email);
    console.log("userData is what on the local-signup: "+userData.password);
    console.log("userData is what on the local-signup: "+userData.name);
    console.log(`newUser is what on the local-signup: ${newUser}`);
    newUser.save((err) => {
        if (err) {return done(err);}
        return done(null);
    });
});