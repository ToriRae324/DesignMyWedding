const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const LoginLocalStrategy = require('passport-local').Strategy;
const config = require('../config');

module.exports = new LoginLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim()
    };

    return User.findOne({email: userData.email}, (err, user) => {
        if (err) {return done(err);}

        if(!user) {
            const error = new Error('Incorrect email or password!');
            error.name = 'IncorrectCredentialsError';
            return done(error);
        }

        return user.comparePassword(userData.password, (passwordErr, isMatch) => {
            if (err) {return done(err);}

            if (!isMatch) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';

                return done(error);
            }

            // set user _id up
            const payload = {
                sub: user._id
            };

            // create a token string
            const token = jwt.sign(payload, config.jwtSecret);
            const data = {
                name: user.name,
                id: user._id
            };
            console.log(data)
            return done(null, token, data);
        });
    });
});