const asyncHandler= require("express-async-handler");
const Post = require("../models/postModel");
const slugify= require("slugify");
const { fileSizeFormatter } = require("../utils/uploadImage");
const cloudinary= require("cloudinary").v2


const createPost = asyncHandler(async (req, res) => {
  const { title, description, categoryID } = req.body;
  const userId = req.user.id;
  const slug = slugify(req.body.title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    strict: true,
  });
  if (!title || !description || !categoryID) {
    res.status(400);
    throw new Error("all fields are required");
  }
  let fileData = {};
  if (req.file) {
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Marvelous/post",
        resource_type: "image",
      });
    } catch (error) {
      res.status(500);
      throw new Error("Image could not be uploaded");
    }
    fileData = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
    };
  }
  const blog = await Post.create({
    user: userId,
    title,
    slug: slug,
    category:categoryID,
    description,
    image: fileData,
  });
  res.status(201).json({
    success: true,
    data: blog,
  });
});

const getAllBlogs = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort("-createdAt").populate("user");
  res.status(200).json(posts);
});
const getBlogsByUserID = asyncHandler(async (req, res) => {
  console.log(req.user);
  const user = req.body.user;
  const posts = await Post.find().sort("-createdAt").populate("user");
  res.status(200).json(posts);
});

const getBlogByID = asyncHandler(async (req, res) => {
  const blog = await Post.findOne({ slug: req.params.slug });

  console.log(blog);
  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }
  res.status(200).json(blog);
});

///deleting the blogs
const deleteBlogs = asyncHandler(async (req, res) => {
  await Post.findByIdAndDelete(req.params.is);
  res
    .status(200)
    .json({ status: "success", message: " post deleted successfully" });
});

//updatinfg the blogs
const updateBlogs = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;

  const blog = await Post.findById(id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }
  if (blog.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedPost = await Post.findByIdAndUpdate(
    { id: _id },
    { title, description },
    { new: true, runValidators: true }
  );

  res.status(200).json(updatedPost);
});

module.exports = {
  createPost,
  getAllBlogs,
  getBlogByID,
  getBlogsByUserID,
  deleteBlogs,
  updateBlogs,
};