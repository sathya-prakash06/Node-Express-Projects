const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      minlength: [3, "Company name must be at least 3 characters"],
    },
    position: {
      type: String,
      required: [true, "Position name is required"],
      trim: true,
      minlength: [3, "Position name must be at least 3 characters"],
      maxlength: [100, "Position name must be at most 30 characters"],
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "CreatedBy is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
