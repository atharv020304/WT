const express = require("express");
const cors = require("cors");
const student = require("./model/student");
const admin = require("./model/admin");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const SsignUP = async (req, res) => {
  try {
    const result = await student.create(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};
const Slogin = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  try {
    const result = await student.findOne({ name: name });
    if (result.password === password) {
      res.status(200).json({
        login: true,
      });
    } else {
      res.status(200).json({
        login: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const AsignUp = async (req, res) => {
  try {
    const result = await admin.create(req.body);
    res.status(200).json({
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const Alogin = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  try {
    const result = await admin.findOne({ name: name });
    if (result.password === password) {
      res.status(200).json({
        login: true,
      });
    } else {
      res.status(200).json({
        login: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

app.route("/signup").post(SsignUP);
app.route("/login").post(Slogin);
app.route("/adminLogin").post(Alogin);
app.route("/adminSignup").post(AsignUp);

module.exports = app;
