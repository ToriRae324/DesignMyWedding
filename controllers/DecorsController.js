const db = require("../models")

module.exports = {
    find: function (req, res) {
        db.User
            .findById(req.body.id)
            .populate("decors")
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
        console.log(req.body.decorData)
        db.Decor
            .create(req.body.decorData)
            .then(function (newDecor) {
                console.log(newDecor._id)
                db.User.findByIdAndUpdate(userId, {$push: {decors: newDecor._id}}, {new: true})
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