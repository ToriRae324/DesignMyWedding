const db = require("../models")

module.exports = {
    find: function (req, res) {
        db.User
            .findOne({_id: req.body.id})
            .populate("todos")
            .sort({completed: 1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    },
    findById: function (req, res) {
        db.Todo
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        console.log(req.body.userId)
        db.Todo
            .create(req.body.todoData)
            .then(dbModel => {
               return db.User.findOneAndUpdate({_id: req.body.id}, {$push: {todos: dbModel._id}}, {new: true});
            })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        req.body.completed = true
        db.Todo
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Todo
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}