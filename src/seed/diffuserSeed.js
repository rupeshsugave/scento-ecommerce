const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

const diffusers = [

  {
    name: "Luxury Diffuser Set",
    category: "Diffuser Set",
    image: "/images/Difuser set/Diffuser set1.png",
    description: "Premium luxury diffuser set.",
    ingredients: "Fragrance Oil",

    fragrances: [
      {
        name: "Luxury Diffuser",

        variants: [
          {
            size: "Set",
            sku: "DIF-002",
            price: 599,
            stock: 10
          }
        ]
      }
    ]
  }

];

const seedDiffuser = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Product.insertMany(diffusers);

    console.log("Missing Diffuser Added Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedDiffuser();