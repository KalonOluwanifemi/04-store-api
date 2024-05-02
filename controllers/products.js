const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "Products testing routes-static" });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products testing routes" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
