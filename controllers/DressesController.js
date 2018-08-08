const db = require("../models")

module.exports = {
    find: function (req, res) {
        db.Dress
            .find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Dress
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        console.log(req.body)
        db.Dress
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Dress
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Dress
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}