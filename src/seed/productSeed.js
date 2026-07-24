const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

const products = [

  {
    name: "Aromatica",
    category: "Perfume",
    image: "/images/perfumes/aromatica.png",
    description: "Premium handcrafted Aromatica fragrance by Scento.",
    ingredients: "",

    fragrances: [

      {
        name: "Aromatica",

        variants: [
          { size: "8ml", sku: "AR8", price: 99, stock: 10 },
          { size: "15ml", sku: "AR15", price: 149, stock: 10 },
          { size: "30ml", sku: "AR30", price: 329, stock: 10 },
          { size: "60ml", sku: "AR60", price: 699, stock: 10 }
        ]
      },

      {
        name: "Dunhill",

        variants: [
          { size: "8ml", sku: "DU8", price: 99, stock: 10 },
          { size: "15ml", sku: "DU15", price: 149, stock: 10 },
          { size: "30ml", sku: "DU30", price: 329, stock: 10 },
          { size: "60ml", sku: "DU60", price: 699, stock: 10 }
        ]
      }

    ]
  },



  {
    name: "Tempest",
    category: "Perfume",
    image: "/images/perfumes/Perfum(Tempest).png",
    description: "Luxury Tempest fragrance by Scento.",
    ingredients: "",

    fragrances: [

      {
        name: "Tempest",

        variants: [
          { size: "8ml", sku: "TE8", price: 99, stock: 10 },
          { size: "15ml", sku: "TE15", price: 149, stock: 10 },
          { size: "30ml", sku: "TE30", price: 329, stock: 10 },
          { size: "60ml", sku: "TE60", price: 699, stock: 10 }
        ]
      },

      {
        name: "Delicate",

        variants: [
          { size: "8ml", sku: "DE8", price: 99, stock: 10 },
          { size: "15ml", sku: "DE15", price: 149, stock: 10 },
          { size: "30ml", sku: "DE30", price: 329, stock: 10 },
          { size: "60ml", sku: "DE60", price: 699, stock: 10 }
        ]
      }

    ]
  },  {
    name: "Clementine",
    category: "Perfume",
    image: "/images/perfumes/Clementine perfume.png",
    description: "Fresh Clementine fragrance by Scento.",
    ingredients: "",

    fragrances: [

      {
        name: "Clementine",

        variants: [
          { size: "8ml", sku: "CL8", price: 99, stock: 10 },
          { size: "15ml", sku: "CL15", price: 149, stock: 10 },
          { size: "30ml", sku: "CL30", price: 329, stock: 10 },
          { size: "60ml", sku: "CL60", price: 699, stock: 10 }
        ]
      },

      {
        name: "Invictus",

        variants: [
          { size: "8ml", sku: "IN8", price: 99, stock: 10 },
          { size: "15ml", sku: "IN15", price: 149, stock: 10 },
          { size: "30ml", sku: "IN30", price: 329, stock: 10 },
          { size: "60ml", sku: "IN60", price: 699, stock: 10 }
        ]
      }

    ]
  }

];

const seedProducts = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products Added Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedProducts();