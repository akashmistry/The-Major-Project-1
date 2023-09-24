const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/codeial");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MOngoDB"));

db.once("open", () => {
  console.log("connected to mongoDB");
});

module.exports = db;
