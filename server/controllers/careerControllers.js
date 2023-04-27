const asyncHandler = require("express-async-handler");
const Career = require("../models/careerModel");

const createCareer = asyncHandler(async (req, res) => {
  const { title, description, type, responsibility, salary, location } = req.body;

  if (!title || !description || !type || !responsibility || !salary || !location) {
    res.send(400);
    throw new Error("all fields are required");
  } else{
    const career = Career.create({
        title,
        description,
        responsibility,
        salary,
        type,
        location
      });
    
      res.status(200).json({ status: "success", data: career });

  }

  
});

const deleteCareer = asyncHandler(async (req, res) => {
  const career = await Career.findById(req.params.id);

  if (!career) {
    res.status(400);
    throw new Error("career not found");
  } else {
    await Career.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ status: " success", message: "career deleted successfully" });
  }
});

//fetching all the career
const getAllCareer = asyncHandler(async (req, res) => {
  const career = await Career.find().sort("-createdAt");
  res.status(200).json(career);
});

///getcareerby id
const getCareerByID = asyncHandler(async (req, res) => {
  const career = await Career.findById(req.params.id);

  if (!career) {
    res.status(400);
    throw new Error("career not found");
  } else {
    res.status(200).json(career);
  }
});

//upodating the career
const updateCareer = asyncHandler(async (req, res) => {
  const { title, description, type, responsibility, salary } = req.body;
  const { id } = req.params.id;

  const career = await Career.findById(id);

  if (!career) {
    res.status(400);
    throw new Error("career not found");
  } else {
    const updatedCareer = Career.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        type,
        responsibility,
        salary,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(updatedCareer);
  }
});



module.exports={createCareer, deleteCareer, updateCareer, getAllCareer, getCareerByID}
