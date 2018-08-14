const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../config');

module.exports = (req, res, next) => {
    if(!req.body.token) {
        return res.status(401).end();
    }

    // get the last part from an authorization header string
    const token = req.body.token.split(' ')[1];
    console.log(token + ":middleware")

    // decode the token using a scret key-phrase
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {return res.status(401).end();}

        const userId = decoded.sub;
        console.log(userId + ":middleware")
        // check if the user exists by user id
        return db.User.findById(userId, (userErr, user) => {
            if (userErr || !user) {
                return res.status(401).end();
            }
            return next();
        });
    });
};