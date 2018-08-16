const db = require("../models")

module.exports = {
    find: function (req, res) {
        db.User
            .findOne({_id: req.body.id})
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
        console.log(req.body.venueData)
        db.Venue
            .create(req.body.venueData)
            .then(dbModel => {
                return db.User.findOneAndUpdate({_id: req.body.id}, {$push: {venues: dbModel._id}}, {new: true})
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