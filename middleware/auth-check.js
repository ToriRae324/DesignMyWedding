const db = require('../models');

module.exports = (req, res, next) => {
    console.log("auth-check id:"+req.body.id);
    if(!req.body.id) {
        return res.status(401).end();
    }

    // get the last part from an authorization header string
    const userId = req.body.id;
    console.log(`userId: ${userId}`)
    // check if the user exists by user id
    return db.User.findById(userId, (userErr, user) => {
        if (userErr || !user) {
            return res.status(401).end();
        }
        console.log(`userErr and user ${userErr} and then ${user}`)
        return next();
    });
};