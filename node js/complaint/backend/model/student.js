const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Enter student name"],
  },

  password: {
    type: String,
    require: [true, "Enter password"],
  },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
