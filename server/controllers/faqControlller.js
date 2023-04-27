const asyncHandler = require("express-async-handler");
const Faq = require("../models/faqModel");

//creating the faq
const createfaq = asyncHandler(async (req, res) => {
  const { question, answer } = req.body;
  console.log(req.body)

  if (!question || !answer) {
    res.status(400);
    throw new Error("all fields are required");
  }
  const faq =await  Faq.create({
    question,
    answer,
  });
  res.status(200).json({ status: "success", data: faq });
});

//deleting the career
const deleteFaq = asyncHandler(async (rq, res) => {
  const faq = await Faq.findById(req.params.id);

  if (!faq) {
    res.status(400);
    throw new Error("faq not found");
  } else {
    await Faq.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ status: "success", message: "Faq deleted successfully" });
  }
});

///getting all the faq
const getAllFaq = asyncHandler(async (req, res) => {
  const faq = await Faq.find().sort("-createdAt");

  res.status(200).json(faq);
});

///fgetting faqby id
const getFaqByID = asyncHandler(async (req, res) => {
  const faq = Faq.findById(req.params.id);

  if (!faq) {
    res.status(400);
    throw new Error("faq not found");
  } else {
    res.status(200).json(faq);
  }
});

//updating the faq
const updateFaq = asyncHandler(async (req, res) => {
  const { question, answer } = req.body;

  const { id } = req.params.id;
  const faq = await Faq.findById(id);
  if (!faq) {
    res.status(400);
    throw new Error("faq not found");
  } else {
    const updatedFaq = Faq.findByIdAndUpdate(
      { _id: id },
      {
        question,
        answer,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({ status: "success", data: updatedFaq });
  }
});


module.exports= {createfaq, updateFaq, deleteFaq, getAllFaq, getFaqByID}
