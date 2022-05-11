const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [20, "Name must be less than 20 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter a price"],
    min: [0, "Price must be greater than 0"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    min: [1, "Rating must be greater than 1"],
    max: [5, "Rating must be less than 5"],
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not a valid company",
    },
    //enum: ["ikea", "liddy", "caressa", "marcos"],
  },
});

module.exports = mongoose.model("Product", productSchema);
