const app = require("./app");
const mongoose = require("mongoose");

const DB =
  "mongodb+srv://bagdesamarth70:EUQyK2GbY8n2ttUn@cluster0.hild2.mongodb.net/labDB?retryWrites=true&w=majority&appName=Cluster0";
//   "mongodb+srv://bagdesamarth70:@cluster0.hild2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB).then((con) => {
  console.log("Database connected");
});

app.listen(3001, () => {
  console.log("localhost:3001");
});
