const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Enter name"],
    trim: true,
  },

  info: {
    type: String,
    require: [true, "Enter info"],
    trim: true,
  },
});

const data = mongoose.model("data", dataSchema);
module.exports = data;
