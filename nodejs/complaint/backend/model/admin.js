const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Enter name"],
  },

  password: {
    type: String,
    require: [true, "Enter password"],
  },
});

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;
