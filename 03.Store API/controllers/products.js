const getAllProductsStatic = async (req, res) => {
  throw new Error("testing");
  res.status(200).json({ msg: "testing" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "testing" });
};

const createProduct = async (req, res) => {};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
