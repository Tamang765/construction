const express= require("express");
const { createBlogCategory } = require("../controllers/blogCategoryController");

const router= express.Router();

router.post("/create_category", createBlogCategory)

module.exports= router;