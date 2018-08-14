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
            required: "Email is required",
            index: {unique: true}
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

userSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
    const user = this;

    if(!user.isModified('password')) return next();

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