const express= require("express");
const checkUserAuth = require("../middlewares/authMiddlewares");
const { createProject, getAllProject, updateProject, deleteProject } = require("../controllers/projectController");
const restrictTo = require("../middlewares/restrict");
const { upload } = require("../utils/uploadImage");


const router= express.Router();


router.post('/create_project', upload.array("image"), checkUserAuth, createProject)
router.get('/', getAllProject);
router.get('/:id',checkUserAuth, restrictTo('admin'), updateProject )
router.delete('/:id', deleteProject)
router.patch(":/id", updateProject);



module.exports= router