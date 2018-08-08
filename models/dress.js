const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dressSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: {unique:true}
    },
    url: {
        type: String,
        require: true,
    },
    photo: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    currency_code: {
        type: String,
        required: true
    },
    shop: {
        type: String,
        required: true,
    },
    shopSite: {
        type: String,
        required: true,
    }
});

const Dress = mongoose.model("Dress", dressSchema);

module.exports = Dress;