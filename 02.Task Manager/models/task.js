const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
