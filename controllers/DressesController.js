const db = require("../models")

module.exports = {
    find: function (req, res) {
        db.User
            .findOne({_id: req.body.id})
            .populate("dresses")
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
        db.Dress
            .create(req.body.dressData)
            .then(dbModel => {
                return db.User.findOneAndUpdate({_id: req.body.id}, {$push: {dresses: dbModel._id}}, {new: true})
            })
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