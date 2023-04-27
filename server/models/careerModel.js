const mongoose = require("mongoose");

const careerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, " titleis required"],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "employement type  is required"],
      trim: true,
    },
    
    description:{
      type: String,
      required: [true, "job descriptio is required"],
      trim: true,
    },
    responsibility: {
      type: String,
      required: [true, "job responsibility is required"]
    },
    salary: {
      type: Number,
      required: [true, "salary is required"],
    },
    location: {
      type: String,
      required: [true, "location is required"]
    }
  },
  {
    timestamps: true,
  }
);

const Career = mongoose.model("Career", careerSchema);
module.exports = Career;
