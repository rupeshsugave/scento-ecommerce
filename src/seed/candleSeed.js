const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

const candles = [

  {
    name: "Mogra Candle",
    category: "Candles",
    image: "/images/Candles/Gel bottle candles(Mogra).png",
    description: "Premium handmade gel candle with Mogra fragrance.",
    ingredients: "Gel Wax",

    fragrances: [
      {
        name: "Mogra",

        variants: [
          {
            size: "1 Piece",
            sku: "CAN-MOG-001",
            price: 299,
            stock: 10
          }
        ]
      }
    ]
  },



  {
    name: "Mohgany Candle",
    category: "Candles",
    image: "/images/Candles/Gel bottle candles(Mohgany).png",
    description: "Premium handmade gel candle with Mohgany fragrance.",
    ingredients: "Gel Wax",

    fragrances: [
      {
        name: "Mohgany",

        variants: [
          {
            size: "1 Piece",
            sku: "CAN-MOH-001",
            price: 299,
            stock: 10
          }
        ]
      }
    ]
  },



  {
    name: "Lavender Candle",
    category: "Candles",
    image: "/images/Candles/Lavender.png",
    description: "Premium handmade Lavender scented candle.",
    ingredients: "Gel Wax",

    fragrances: [
      {
        name: "Lavender",

        variants: [
          {
            size: "1 Piece",
            sku: "CAN-LAV-001",
            price: 299,
            stock: 10
          }
        ]
      }
    ]
  }

];

const seedCandles = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Product.insertMany(candles);

    console.log("Missing Candles Added Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedCandles();