const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://cascercerim:Kaylam9!@ds263248.mlab.com:63248/heroku_r2hx023g");
console.log('MongoDB connected');


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  }

  // Add routes, both API and view
app.use(routes);
const PORT = process.env.PORT || 3001;
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});