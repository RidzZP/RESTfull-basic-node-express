const logMiddleware = (req, res, next) => {
  console.log("Terjadi Request Pada Path " + req.path);
  next();
};

module.exports = logMiddleware;
