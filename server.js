const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const log = console.log;

  // Add routes, both API and view
  app.use(routes);
  const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books");
console.log('MongoDB connected');

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  }
  app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

  
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});