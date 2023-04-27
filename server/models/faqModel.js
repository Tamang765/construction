const mongoose = require("mongoose");

const faqSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "question is required"],
      trim: true,
    },
    answer: {
      type: String,
      required: [true, "answer is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Faq= mongoose.model("Faq", faqSchema);
module.exports= Faq
