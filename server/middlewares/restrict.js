const restrictTo = (...roles) => {
  return (req, res, next) => {
    const user = req.user;

    if (!roles.includes(user.role)) {
      return next(
        res.status(403).send({ status: "failed", message: "Not Authorized" })
      );
    }
    next();
  };
};

module.exports= restrictTo
