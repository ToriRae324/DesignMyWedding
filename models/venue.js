const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  name: { 
    type: String,
    required: true,
    index: {unique:true}
  },
  locale: {
      type: String,
      require: false,
  },
  photo: {
      type: String,
      required: false,
  },
  rating: {
    type: String,
    required: false,
},
phone: {
    type: String,
    required: false,
},

  occupancy: {
      type: String,
      required: false,
      default: "Call For Details"
  }

});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;