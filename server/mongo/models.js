const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  { name: "string", id: "number" },
  { collection: "Users" }
);
const User = mongoose.model("User", userSchema);

module.exports = { User };
