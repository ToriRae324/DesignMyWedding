const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: "Email is required",
        index: {unique: true}
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: true
    },
    venues: [
        {
            type: Schema.Types.ObjectId,
            ref: "Venue"
        }
    ],
    decors: [
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
    ],
    todos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]

});

mongoose.pluralize(null);

userSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

userSchema.pre('save', function saveHook(next) {
    const user = this;

    if(!user.isModified('password')) {return next();}

    return bcrypt.genSalt((saltError, salt) => {

        
        if(saltError) {return next(saltError); }

        return bcrypt.hash(user.password, salt, (hashError, hash) => {
            if(hashError) { return next(hashError); }

            user.password = hash;

            return next();
        });
    });
});

const User = mongoose.model("User", userSchema);

module.exports = User;