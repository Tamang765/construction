const asyncHandler = require("express-async-handler");
const Team = require("../models/teamModel");
const { fileSizeFormatter } = require("../utils/uploadImage");
const cloudinary= require("cloudinary").v2
const createTeam = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber, description, position } = req.body;
  if (!name || !email || !phoneNumber || !description || !position) {
    res.status(400);
    throw new Error("Please fill the required fields");
  }
  let fileData = {};
  if(req.file){
    let uploadedFile;
    try{
      uploadedFile= await cloudinary.uploader.upload(req.file.path, {
        folder: "Marvelous/teams",
        resource_type: "image"
      })
    } catch(error){
      res.status(500);
      throw new Error("Image could not be uploaded")
    }
    fileData={
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size)
    }
  }
  const team =await Team.create({
    name,
    email,
    phoneNumber,
    description,
    position,
    image: fileData
  });

  res.status(200).json({
    success: true,
    data: team,
  });
});



///fetching all the team members from  the database
const getAllTeam = asyncHandler(async (req, res) => {
  const teams = await Team.find().sort("-createdAt");
  res.status(200).json(teams);
});

const getTeamByID = asyncHandler(async (req, res) => {
  const team = await Team.findById(req.params.id);

  if (!team) {
    res.status(400).json({ message: "no team member found with given id" });
  }

  res.status(200).json(team);
});

///deleting the team member
const deleteTeam = asyncHandler(async (req, res) => {
  const team = await Team.findById(req.params.id);

  if (!team) {
    res.json({ message: "no team member found " });
  } else {
    await Team.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: " team member deleted successfully",
    });
  }
});

//updating the team member
const updateTeam = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber, description, position } = req.body;
  const { id } = req.params;

  const team = await Team.findById(id);
  if (!team) {
    res
      .status(400)
      .json({ status: "failed", message: " no team member found" });
  } else {
    const updatedTeam = Team.findByIdAndUpdate(
      { _id: id },
      {
        name,
        email,
        phoneNumber,
        description,
        position,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(updatedTeam)
  }
});

module.exports = { createTeam, getAllTeam, deleteTeam, updateTeam , getTeamByID};