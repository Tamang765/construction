const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    clientName: {
      type: String,
      required: [true, "client name is required"],
    },
    clientNumber: {
      type: Number,
      required: [true, "Number is required"],
    },
    clientEmail: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
      trim: true,
      match: [
        /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/,
        "plaease enter a valid email",
      ],
    },
    clientAddress: {
      type: String,
      required: [true, "please add address"],
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

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
