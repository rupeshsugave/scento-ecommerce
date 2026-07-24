const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");

// ==========================
// Add To Cart
// ==========================
router.post("/add", async (req, res) => {
  try {
    const { user, perfume, quantity } = req.body;

    const existingCart = await Cart.findOne({
      user,
      perfume,
    });

    if (existingCart) {
      existingCart.quantity += quantity || 1;

      await existingCart.save();

      return res.json({
        success: true,
        message: "Cart Updated Successfully",
        cart: existingCart,
      });
    }

    const cart = await Cart.create({
      user,
      perfume,
      quantity,
    });

    res.json({
      success: true,
      message: "Added To Cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==========================
// Get User Cart
// ==========================
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.find({
      user: req.params.userId,
    }).populate("perfume");

    res.json({
      success: true,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;