const express= require("express");
const { model } = require("mongoose");
const checkUserAuth = require("../middlewares/authMiddlewares");
const { createTeam, getAllTeam, getTeamByID, deleteTeam, updateTeam } = require("../controllers/teamControllers");

const router= express.Router();


router.post('/create_team', checkUserAuth,createTeam )
router.get('/', getAllTeam ),
router.get("/:id", getTeamByID),
router.delete("/:id", checkUserAuth, deleteTeam);
router.patch("/:id", checkUserAuth, updateTeam);


module.exports= router