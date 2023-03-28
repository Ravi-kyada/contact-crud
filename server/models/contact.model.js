const mongoose = require("mongoose");

module.exports = mongoose.model("contact", {
  name: { type: String },
  surname: { type: String },
  location: { type: String },
  age: { type: Number },
});
