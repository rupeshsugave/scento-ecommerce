const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Perfume = require("../models/Perfume");
dotenv.config();

const products = [
  {
    name: "Perfumer",
    fragrance: "Aromatica",
    category: "Perfume",
    image: "/images/perfumer.png",

    variants: [
      {
        size: "8ml",
        sku: "PA15",
        price: 99,
        stock: 10,
      },
      {
        size: "15ml",
        sku: "PA30",
        price: 149,
        stock: 10,
      },
      {
        size: "30ml",
        sku: "PA50",
        price: 249,
        stock: 10,
      },
      {
        size: "60ml",
        sku: "PA100",
        price: 499,
        stock: 10,
      },
    ],

    description:
      "Premium handcrafted fragrance by Scento.",
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Perfume.deleteMany();

    await Perfume.insertMany(products);

    console.log("Products Added Successfully");

    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedProducts();