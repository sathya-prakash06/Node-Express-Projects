const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [20, "Name must be at most 20 characters long"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"], // email required
    trim: true, // remove whitespace
    unique: true, // unique is provides a unique index
    match: [
      // match is a mongoose method
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    trim: true,
    minlength: [6, "Password must be at least 6 characters long"],
    maxlength: [200, "Password must be at most 20 characters long"],
  },
});

module.exports = mongoose.model("User", userSchema);
