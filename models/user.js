const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    access: {
        username: {
            type: String,
            unique: "Username must be unique",
            required: true,
            trim: true
        },
        password: {
            type: String,
            trim: true,
            required: "Password is required",
            validate: [
                function (input) {
                    return input.length >= 8;
                },
                "Password must be at least 8 characters"
            ]
        },
        email: {
            type: String,
            match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
            required: "Email is required"
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    venues: [
        {
            type: Schema.Types.ObjectId,
            ref: "Venue"
        }
    ],
    decor: [
        {
            type: Schema.Types.ObjectId,
            ref: "Decor"
        }
    ],
    dresses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Dress"
        }
    ]

});

const User = mongoose.model("User", userSchema);

module.exports = User;