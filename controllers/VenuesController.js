const db = require("../models")

module.exports = {
    find: function (req, res) {
        db.User
            .find(req.body.id)
            .populate("venues")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Venue
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        const userId = req.body.id;
        console.log(`userId in the decores controller ${userId}`)
        console.log(req.body.decorData)
        db.Venue
            .create(req.body)
            .then(function (newVenue) {
                console.log(newVenue._id)
                db.User.findByIdAndUpdate(userId, {$push: {venues: newVenue._id}}, {new: true})
            })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Venue
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Venue
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}