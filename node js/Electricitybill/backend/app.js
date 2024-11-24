const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const getBill = async (req, res) => {
  const units = req.body.units;

  let bill = 0.0;

  if (units <= 50) {
    bill = units * 3.5;
  } else if (units > 50 && units <= 150) {
    bill = 50 * 3.5 + (units - 50) * 4;
  } else if (units > 150 && units <= 250) {
    bill = 50 * 3.5 + 100 * 4 + (units - 150) * 5.2;
  } else if (units > 250) {
    bill = 50 * 3.5 + 100 * 4 + 100 * 5.2 + (units - 250) * 6.5;
  }

  res.status(200).json({
    bill,
  });
};

app.route("/").post(getBill);

module.exports = app;
