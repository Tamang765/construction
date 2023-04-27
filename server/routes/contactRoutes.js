const express= require("express");
const { createContact } = require("../controllers/contactControllers");
const router= express.Router();



router.post('/', createContact);

module.exports= router