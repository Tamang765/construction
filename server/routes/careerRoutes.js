const express= require("express");
const checkUserAuth = require("../middlewares/authMiddlewares");
const restrictTo = require("../middlewares/restrict");
const { createCareer, getAllCareer, getCareerByID, deleteCareer, updateCareer } = require("../controllers/careerControllers");

const router= express.Router();

router.post('/create_career',  createCareer);
router.get('/', getAllCareer);
router.get("/:id", getCareerByID);
router.delete("/:id", checkUserAuth, restrictTo("admin"), deleteCareer);
router.patch("/:id", checkUserAuth, restrictTo("admin"), updateCareer);

module.exports= router