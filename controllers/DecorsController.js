const db = require("../models")

module.exports = {
    find: function (req, res) {
        console.log("success")
        db.Decor
            .find({})
            .sort({ date: -1 })
            .then(dbModel => console.log(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Decor
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        console.log(req.body)
        db.Decor
            .create(req.body)
            .then(dbModel => res.json(dbModel))
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