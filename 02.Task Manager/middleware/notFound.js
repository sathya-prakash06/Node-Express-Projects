const notFound = (req, res, next) => {
  res.status(404).json({ success: false, err: "Route does not exist" });
};

module.exports = notFound;
