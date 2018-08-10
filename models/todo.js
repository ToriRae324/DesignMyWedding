const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    body: {
        type: String,
        required: true,
        index: {unique:true}
    },
    completed: {
        type: Boolean,
        default: false,
        require: true,
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;