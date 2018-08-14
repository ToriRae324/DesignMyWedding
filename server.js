const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
const mongoose = require("mongoose");
const morgan = require("morgan")
const routes = require("./routes");
const axios = require("axios")
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/proj3");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize passport
app.use(passport.initialize());

// local strategies for verification on login and signup
const SignupStrategy = require('./passport/local-signup');
const LoginStrategy = require('./passport/local-login');
passport.use('local-signup', SignupStrategy);
passport.use('local-login', LoginStrategy);

// Middleware checker to see if the user is authorized, if they aren't they are immediately kicked and not authorized to see protected information
const authCheckMiddleware = require('./middleware/auth-check');
// Commented out until /api routes are prepared for auth-check
// app.use('/api', authCheckMiddleware);

app.use(morgan("dev"))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// 2 different routes folders for use of authentication and protecting the routes

// const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

// first app.use is so that the auth routes must be hit and completed first
// app.use('/auth', authRoutes);
// second app.use is for all the api routes after the person is authorized to view them.
// app.use('/api', apiRoutes);

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});