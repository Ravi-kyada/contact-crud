const mongoose = require("mongoose");

const DB =
  "mongodb+srv://ravikyada:ravikyada@cluster0.qorbkdt.mongodb.net/curdapp?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("CONNECTED TO DB");
  })
  .catch((error) => {
    console.log(error);
  });
