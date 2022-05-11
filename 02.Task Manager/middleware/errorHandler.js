const { CustomAPIError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    res.status(err.statusCode).json({ success: false, err: err.message });
  }
  res.status(500).json({ success: false, err: "Something went wrong" });
  return;
};

module.exports = errorHandler;
