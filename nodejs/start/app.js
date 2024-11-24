const express = require("express");
const data = require("./models/data");

const app = express();

app.use(express.json());

const add = async (req, res) => {
  try {
    const result = await data.create(req.body);
    res.status(201).json({
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(400).json({
      error: "fail",
    });
  }
};

app.route("/").post(add);

module.exports = app;
