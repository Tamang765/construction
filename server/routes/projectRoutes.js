const express= require("express");
const checkUserAuth = require("../middlewares/authMiddlewares");
const { createProject, getAllProject, updateProject, deleteProject, getProjectByID } = require("../controllers/projectController");
const restrictTo = require("../middlewares/restrict");
const { upload } = require("../utils/uploadImage");
const router= express.Router();
router.post('/create_project', upload.array("image"), checkUserAuth, createProject)
router.get('/', getAllProject);
router.delete('/:id', deleteProject)
router.patch("/:id", updateProject);
router.get("/:slug", getProjectByID);



module.exports= router