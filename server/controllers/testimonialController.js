const asyncHandler = require("express-async-handler");
const Testimonial = require("../models/testimonialModel");

const createTestimonial = asyncHandler(async (req, res) => {
  const { clientID, message } = req.body;

  if (!clientID || !message) {
    res.status(400);
    throw new Error("all fields are required");
  }

  const testimonial =await Testimonial.create({
    clientID,
    message,
  });



  res.status(200).json({
    success: true,
    testimonial: testimonial,
  });
});

const getAllTestimonial = asyncHandler(async (req, res) => {
  const testimonials= await Testimonial.find().sort("-createdAt").populate("ClientID")
  res.status(200).json(testimonials)
})

const getTestimonialById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const testi = await Testimonial.findById(id).populate("clientID");
 

  if (!testi) {
    res.status(400);
    throw new Error("Testimonial Not found");
  }

  res.status(200).json(testi);
});

const deleteTestimonial= asyncHandler(async(req, res)=>{
  const testimonial= await Testimonial.findById(req.params.id);

  if(!testimonial){
    res.status(400)
    throw new Error("Testimonial not found")
  }

  await Testimonial.remove(testimonial)
  res.status(200).json({message: "deleted successfully"})
})



module.exports = { createTestimonial, getTestimonialById,getAllTestimonial, deleteTestimonial };
