const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const decorSchema = new Schema({
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
  }

});

const Decor = mongoose.model("Decor", decorSchema);

module.exports = Decor;