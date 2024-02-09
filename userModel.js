const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  branch: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
