const express = require("express");
const {
  createClient,
  deleteClient,
  getAllClients,
  getSingleClient,
  updateClient,
} = require("../controllers/clientControllers");
const checkUserAuth = require("../middlewares/authMiddlewares");
const restrictTo = require("../middlewares/restrict");
const router = express.Router();

router.post("/create_client",checkUserAuth, createClient);
router.delete("/delete/:id", deleteClient);
router.get("/:id", getSingleClient);
router.patch("/:id", updateClient);
router.get("/", getAllClients);

module.exports = router;
