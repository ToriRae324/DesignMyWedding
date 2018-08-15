const db = require("../models")

module.exports = {
    find: function (req, res) {
        db.Decor
            .find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Decor
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        const token = req.body.token.split(' ')[1]
        console.log(token + ":decorController")
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            const userId = decoded.sub
            console.log(userId+ ":decorController")
            db.Decor
                .create(req.body)
                .then(function (newDecor) {
                    Db.User.findByIdAndUpdate(userId, {$push: {decors: newDecor._id}}, {new: true})
                })
        }).catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Decor
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Decor
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}