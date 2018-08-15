const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri);

  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  require('./user');
};

module.exports = {
    User: require("./user"),
    Venue: require("./venue"),
    Decor: require("./decor"),
    Dress: require("./dress"),
    Todo: require("./todo")
  };