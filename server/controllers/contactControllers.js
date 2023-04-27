const expressAsyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const createContact = expressAsyncHandler(async (req, res) => {
  const { name, emailAddress, phoneNo, message } = req.body;

  if (!name || !emailAddress || !phoneNo || !message) {
    res.status(400);
    throw new Error("Please fill all the required fields");
  }

  const cont = await Contact.create({
    name,
    emailAddress,
    phoneNo,
    message,
  });

  res.status(201).json({
    success: true,
    data: cont,
  });
});


module.exports={createContact}
