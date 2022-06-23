const mongoose = require("mongoose");

const LogSchema = mongoose.Schema({
  request: String,
  gameName: String,
  response: String,
});

const Log = mongoose.model("Test", LogSchema);

module.exports = Log;
