const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  name: { 
    type: String,
    required: true,
  },
  locale: {
      type: String,
      require: true,
  },
  photo: {
      type: String,
      required: true,
  },
  occupancy: {
      type: Number,
      required: false,
      default: "Call For Details"
  }

});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;