const Product = require("../models/Product");

// Get All Products
const getAllPerfumes = async (req, res) => {
  try {

    const products = await Product.find();

    res.status(200).json({
      success: true,
      perfumes: products
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }
};


// Get Single Product
const getSinglePerfume = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return res.status(404).json({
        success: false,
        message: "Product Not Found"
      });

    }

    res.status(200).json({
      success: true,
      perfume: product
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }
};


module.exports = {
  getAllPerfumes,
  getSinglePerfume
};