const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      match: [
        /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/,
        "plaease enter a valid email",
      ],
    },
    phoneNumber: {
      type: Number,
      required: [true, "please addd number"],
    },
    address: {
      type: String,
      required: [true, "Please add address"],
      trim: true,
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Team= mongoose.model("Team", teamSchema);

module.exports= Team
