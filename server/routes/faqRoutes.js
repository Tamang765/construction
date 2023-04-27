const express= require("express");
const checkUserAuth = require("../middlewares/authMiddlewares");
const restrictTo = require("../middlewares/restrict");
const { createfaq, getAllFaq, getFaqByID, deleteFaq, updateFaq } = require("../controllers/faqControlller");
const router= express.Router()


router.post("/create_faq", checkUserAuth, createfaq);
router.get("/", getAllFaq);
router.get("/:id", getFaqByID);
router.delete("/:id", checkUserAuth, restrictTo("admin"), deleteFaq);
router.patch("/:id", checkUserAuth, restrictTo("admin"), updateFaq)


module.exports= router