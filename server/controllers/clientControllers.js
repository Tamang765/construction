const asyncHandler = require("express-async-handler");
const Client = require("../models/clientModel");

///creating the clients
const createClient = asyncHandler(async (req, res) => {
  const { clientName, clientEmail, clientAddress, clientNumber } = req.body;
  console.log(res.body);

  if (!clientName || !clientEmail || !clientAddress || !clientNumber) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const client =await Client.create({
    clientEmail,
    clientAddress,
    clientName,
    clientNumber,
  });

  res.status(201).json({
    success: true,
    data: client,
  });
});

///getting all the clients
const getAllClients = asyncHandler(async (req, res) => {
  const clients = await Client.find().sort("dateCreated");
  res.status(200).json(clients);
});

//getting single client
const getSingleClient = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    res.status(400);
    throw new Error("Client Not found");
  }
  res.status(200).json(client);
});

///deleting the client
const deleteClient = asyncHandler(async (req, res) => {
   await Client.findByIdAndDelete(req.params.id)
  res.status(200).json({ message: "client deleted successfuly" });
});


///updateing the client
const updateClient = asyncHandler(async (req, res) => {
  const { clientName, clientAddress, clientNumber, clientEmail } = req.body;
  const { id } = req.params;

  const client = await Client.findById(id);

  if(!client){
    res.status(400)
    throw new Error("client not found")
  }
  const updatedClient = await Client.findByIdAndUpdate(
    { _id: id },
    {
      clientName,
      clientNumber,
      clientAddress,
      clientEmail,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json(updatedClient);
});

module.exports = { createClient, deleteClient, getSingleClient, getAllClients, updateClient };
