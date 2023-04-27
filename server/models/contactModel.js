const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trime: true,
    },
    phoneNo: {
      type: String,
      required: [true, "please add aphone number"],
      trime: true,
    },
    emailAddress: {
      type: String,
      required: [true, "Please add a email"],
      trime: true,
    },
    message: {
      type: String,
      required: [true, "Please add message"],
      trime: true,
    },
    dateCreated: {
      type: Date,
      default: Date.now,
      expires: 2592000000,
    },
  },
  {
    timestamps: true,
  }
)

const Contact= mongoose.model("Contact", contactSchema)
module.exports= Contact;
