const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");
const { fileSizeFormatter } = require("../utils/uploadImage");
const cloudinary= require("cloudinary").v2;
const slugify = require("slugify");

const createProject = asyncHandler(async (req, res) => {
  const { projectName, projectDescription } = req.body;
  const slug = slugify(req.body.projectName, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    strict: true,
  });

  if (!projectName || !projectDescription ) {
    res.status(400);
    throw new Error("all fields are required");
  }
  const fileData = [];
  if (req.files && req.files.length > 0) {
    for (const file of req.files) {
      let uploadedFile;
      try {
        uploadedFile = await cloudinary.uploader.upload(file.path, {
          folder: "Marvelous/post",
        });
      } catch (error) {
        res.status(500);
        throw new Error("Image could not be uploaded");
      }
      fileData.push({
        fileName: file.originalname,
        filePath: uploadedFile.secure_url,
        fileType: file.mimetype,
        fileSize: fileSizeFormatter(file.size, 2),
      });
    }
  }
  const project = await  Project.create({
    projectName,
    projectDescription,
    slug:slug,
    image: fileData,
  });
  console.log(project)
  res.status(200).json({status: "success", data: project});
});
const getAllProject = asyncHandler(async (req, res) => {
  const projects =await Project.find().sort("-createdAt");
  res.status(200).json(projects);
});
const getProjectByID = asyncHandler(async (req, res) => {
  const project = await Project.findOne({slug:req.params.slug});
  res.status(200).json(project)
})

const updateProject = asyncHandler(async (req, res) => {
  const { projectName, projectDescription } = req.body;
  const { id } = req.params;

  const project = await Project.findById(id);

  if (!project) {
    res.status(400);
    throw new Error("project not found");
  }

  const updatedProject = await Project.findByIdAndUpdate(
    { _id: id },
    { projectName, projectDescription, budget },
    { new: true, runValidators: true }
  );

  res.status(200).json(updatedProject);
});

//deleting the project
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("no project found");
  }
  await Project.remove(project);
  res.status(200).json({ message: "Successfully deleted project" });
});

module.exports = { createProject, getProjectByID,getAllProject, updateProject, deleteProject };
