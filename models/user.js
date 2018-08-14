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

mongoose.pluralize(null);

userSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

userSchema.pre('save', function saveHook(next) {
    const user = this;
    console.log("what is the user before saving? "+user);
    if(!user.isModified('password')) {return next();}
    console.log(`if statement to see if password is modified ${!user.isModified('password')}`)
    return bcrypt.genSalt((saltError, salt) => {
        console.log(`salt error ${saltError}`);
        console.log(`salt is what? ${salt}`);
        
        if(saltError) {return next(saltError); }
        console.log(`this is user.pass word to be hashed by bcrypt: ${user.password}`)
        return bcrypt.hash(user.password, salt, (hashError, hash) => {
            if(hashError) { return next(hashError); }

            user.password = hash;

            return next();
        });
    });
});

const User = mongoose.model("User", userSchema);

module.exports = User;