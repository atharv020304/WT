const app = require("./app");
const mongoose = require("mongoose");

const DB =
  "mongodb+srv://bagdesamarth70:F4umDwMUuhuqy2oD@cluster0.hild2.mongodb.net/labDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB).then((con) => {
  console.log("DB connection successful !");
});

app.listen(3000, () => {
  console.log(`Linstening on Port : localhost:3000`);
});

// F4umDwMUuhuqy2oD
