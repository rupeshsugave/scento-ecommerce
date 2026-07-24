const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

const carPerfumes = [

  {
    name: "Royal Rajanigandha Car Perfume",
    category: "Car Perfumes",
    image: "/images/car perfumes/Car perfume(Royal Rajanigandha).png",
    description: "Premium Royal Rajanigandha car perfume.",
    ingredients: "Fragrance Oil",

    fragrances: [
      {
        name: "Royal Rajanigandha",

        variants: [
          {
            size: "8ml",
            sku: "CAR-RR-001",
            price: 199,
            stock: 10
          }
        ]
      }
    ]
  }

];

const seedCarPerfume = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Product.insertMany(carPerfumes);

    console.log("Missing Car Perfume Added Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedCarPerfume();
