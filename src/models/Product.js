const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      required: true
    },

    sku: {
      type: String,
      default: ""
    },

    price: {
      type: Number,
      required: true
    },

    stock: {
      type: Number,
      default: 10
    }
  },
  { _id: false }
);

const fragranceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    variants: [variantSchema]
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    image: {
      type: String,
      required: true
    },

    description: {
      type: String,
      default: ""
    },

    ingredients: {
      type: String,
      default: ""
    },

    fragrances: [fragranceSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", productSchema);