const express = require("express");
const {
  createTestimonial,
  getTestimonialById,
  deleteTestimonial,
  getAllTestimonial,
} = require("../controllers/testimonialController");

const router = express.Router();

router.post("/create_testimonial", createTestimonial);
router.get("/",getAllTestimonial)
router.get("/:id", getTestimonialById);
router.delete("/:id", deleteTestimonial);

module.exports = router;
