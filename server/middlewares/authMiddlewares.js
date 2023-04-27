const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");



const checkUserAuth = expressAsyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req.headers);
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      //get user id from the token
      const user = await User.findById(verified.id).select("-password");

      if (!user) {
        res.status(401);
        throw new Error("User not found");
      }
      req.user=user ;
      console.log(user)
      next()

    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, Please Login");
    }
  } else{
    res.status(401).json({ status: "failed",message: "Unauthorized Token" })
  }
});

module.exports = checkUserAuth;
