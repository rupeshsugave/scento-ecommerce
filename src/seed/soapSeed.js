const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

const soaps = [

  {
    name: "Pearl Soap Heart",
    category: "Soaps",
    image: "/images/soaps/Pearl soap (heart) .png",
    description: "Beautiful handmade pearl heart soap.",
    ingredients: "Natural oils",

    fragrances: [
      {
        name: "Pearl Heart",

        variants: [
          {
            size: "100g",
            sku: "SOAP-PH-100",
            price: 129,
            stock: 20
          }
        ]
      }
    ]
  },



  {
    name: "Pearl Soap Round",
    category: "Soaps",
    image: "/images/soaps/Pearl soap (round).png",
    description: "Premium handmade pearl soap.",
    ingredients: "Natural oils",

    fragrances: [
      {
        name: "Pearl Round",

        variants: [
          {
            size: "100g",
            sku: "SOAP-PR-100",
            price: 129,
            stock: 20
          }
        ]
      }
    ]
  },



  {
    name: "Red Wine Soap",
    category: "Soaps",
    image: "/images/soaps/Red wine.png",
    description: "Luxury red wine handmade soap.",
    ingredients: "Red wine extract",

    fragrances: [
      {
        name: "Red Wine",

        variants: [
          {
            size: "100g",
            sku: "SOAP-RW-100",
            price: 149,
            stock: 20
          }
        ]
      }
    ]
  },



  {
    name: "Sandlewood & Kesar Oval Soap",
    category: "Soaps",
    image: "/images/soaps/Sandlewood & Kesar (oval).png",
    description: "Premium sandalwood and kesar oval soap.",
    ingredients: "Sandalwood & Kesar",

    fragrances: [
      {
        name: "Sandlewood & Kesar Oval",

        variants: [
          {
            size: "100g",
            sku: "SOAP-SKO-100",
            price: 149,
            stock: 20
          }
        ]
      }
    ]
  },



  {
    name: "Sandlewood & Kesar Soap",
    category: "Soaps",
    image: "/images/soaps/Sandlewood & Kesar .png",
    description: "Premium sandalwood and kesar soap.",
    ingredients: "Sandalwood & Kesar",

    fragrances: [
      {
        name: "Sandlewood & Kesar",

        variants: [
          {
            size: "100g",
            sku: "SOAP-SK-100",
            price: 149,
            stock: 20
          }
        ]
      }
    ]
  }

];

const seedSoaps = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Product.insertMany(soaps);

    console.log("Missing Soaps Added Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedSoaps();