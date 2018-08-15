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
        const userId = req.body.id;
        console.log(`userId in the decores controller ${userId}`)
        db.Decor
            .create(req.body.decorData)
            .then(function (newDecor) {
                Db.User.findByIdAndUpdate(userId, {$push: {decors: newDecor._id}}, {new: true})
            })
            .catch(err => res.status(422).json(err));
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