const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../config');

module.exports = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).end();
    }

    // get the last part from an authorization header string
    const token = req.headers.authorization.split(' ')[1];

    // decode the token using a scret key-phrase
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {return res.status(401).end();}

        const userId = decoded.sub;

        // check if the user exists by user id
        return db.User.findById(userId, (userErr, user) => {
            if (userErr || !user) {
                return res.status(401).end();
            }
            return next();
        });
    });
};