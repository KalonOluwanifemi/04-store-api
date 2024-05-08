const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ name: "vase table" });
  res.status(200).json(products);
};
const getAllProducts = async (req, res) => {
  const { featured, company } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  const products = await Product.find(req.query);
  res.status(200).json({
    products,
    nbHits: products.length,
  });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
