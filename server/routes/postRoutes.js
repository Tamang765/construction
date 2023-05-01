const express = require("express");
const {
  createPost,
  getAllBlogs,
  getBlogsByUserID,
  deleteBlogs,
  updateBlogs,
  getBlogByID,
} = require("../controllers/postControllers");
const checkUserAuth = require("../middlewares/authMiddlewares");
const { upload } = require("../utils/uploadImage");
const router = express.Router();
router.post("/create_post", checkUserAuth, upload.single("image"), createPost);
router.get("/", getAllBlogs);
router.get("/user_posts/:id", checkUserAuth, getBlogsByUserID);
router.delete("/:id", deleteBlogs),
  router.patch("/:id", checkUserAuth, updateBlogs);
  router.get("/:slug", getBlogByID);

module.exports = router;
