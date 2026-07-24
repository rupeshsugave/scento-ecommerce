const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

const urali = [

  {
    name: "Urali Small",
    category: "Urali",
    image: "/images/Urali/Urali small.png",
    description: "Beautiful handcrafted decorative Urali.",
    ingredients: "Premium Metal",

    fragrances: [
      {
        name: "Urali Small",

        variants: [
          {
            size: "Small",
            sku: "URA-SM-001",
            price: 699,
            stock: 10
          }
        ]
      }
    ]
  }

];

const seedUrali = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Product.insertMany(urali);

    console.log("Missing Urali Added Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedUrali();