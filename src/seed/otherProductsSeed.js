const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();


const products = [

  // ================= SOAPS =================

  {
    name:"Aqua Cool Soap",
    category:"Soaps",
    image:"/images/soaps/Aqua cool (val).png",
    description:"Refreshing handmade Aqua Cool soap by Scento.",
    ingredients:"Natural oils, fragrance, skin nourishing ingredients",
    fragrances:[
      {
        name:"Aqua Cool",
        variants:[
          {
            size:"100g",
            sku:"SOAP-AQUA-100",
            price:99,
            stock:20
          }
        ]
      }
    ]
  },


  {
    name:"Browny Soap",
    category:"Soaps",
    image:"/images/soaps/Browny (oval).png",
    description:"Premium handmade Browny soap.",
    ingredients:"Natural extracts and essential oils",
    fragrances:[
      {
        name:"Browny",
        variants:[
          {
            size:"100g",
            sku:"SOAP-BROWN-100",
            price:99,
            stock:20
          }
        ]
      }
    ]
  },


  {
    name:"Lemon Soap",
    category:"Soaps",
    image:"/images/soaps/Lemon (oval).png",
    description:"Fresh lemon handmade soap.",
    ingredients:"Lemon extract and natural oils",
    fragrances:[
      {
        name:"Lemon",
        variants:[
          {
            size:"100g",
            sku:"SOAP-LEMON-100",
            price:99,
            stock:20
          }
        ]
      }
    ]
  },


  {
    name:"Neem Tulsi Soap",
    category:"Soaps",
    image:"/images/soaps/Neem Tulsi soap (round).png",
    description:"Natural Neem Tulsi soap.",
    ingredients:"Neem, Tulsi and herbal extracts",
    fragrances:[
      {
        name:"Neem Tulsi",
        variants:[
          {
            size:"100g",
            sku:"SOAP-NEEM-100",
            price:109,
            stock:20
          }
        ]
      }
    ]
  },


  {
    name:"Rose Soap",
    category:"Soaps",
    image:"/images/soaps/Rose soap (round).png",
    description:"Luxury rose handmade soap.",
    ingredients:"Rose extract and natural oils",
    fragrances:[
      {
        name:"Rose",
        variants:[
          {
            size:"100g",
            sku:"SOAP-ROSE-100",
            price:119,
            stock:20
          }
        ]
      }
    ]
  },



  // ================= CANDLES =================


  {
    name:"Charlie Gel Candle",
    category:"Candles",
    image:"/images/Candles/Gel bottle candles(Charlie).png",
    description:"Beautiful handmade gel candle.",
    ingredients:"Wax, fragrance oil",
    fragrances:[
      {
        name:"Charlie",
        variants:[
          {
            size:"1 Piece",
            sku:"CAN-CHA-1",
            price:299,
            stock:10
          }
        ]
      }
    ]
  },


  {
    name:"Coffee Vanilla Candle",
    category:"Candles",
    image:"/images/Candles/Gel bottle candles(Coffee + vanilla).png",
    description:"Coffee vanilla scented candle.",
    ingredients:"Premium wax and fragrance",
    fragrances:[
      {
        name:"Coffee Vanilla",
        variants:[
          {
            size:"1 Piece",
            sku:"CAN-COF-1",
            price:349,
            stock:10
          }
        ]
      }
    ]
  },


  {
    name:"Rose Gel Candle",
    category:"Candles",
    image:"/images/Candles/Gel bottle candles(Rose).png",
    description:"Elegant rose scented candle.",
    ingredients:"Natural wax and rose fragrance",
    fragrances:[
      {
        name:"Rose",
        variants:[
          {
            size:"1 Piece",
            sku:"CAN-ROS-1",
            price:299,
            stock:10
          }
        ]
      }
    ]
  },



  // ================= CAR PERFUMES =================


  {
    name:"Lavish Love Car Perfume",
    category:"Car Perfumes",
    image:"/images/car perfumes/Car perfume(Lavish Love).png",
    description:"Premium car fragrance.",
    ingredients:"Fragrance oil",
    fragrances:[
      {
        name:"Lavish Love",
        variants:[
          {
            size:"8ml",
            sku:"CAR-LAV-8",
            price:199,
            stock:15
          }
        ]
      }
    ]
  },


  {
    name:"Mohgany Car Perfume",
    category:"Car Perfumes",
    image:"/images/car perfumes/Car perfume(Mohgany).png",
    description:"Luxury car perfume.",
    ingredients:"Premium fragrance",
    fragrances:[
      {
        name:"Mohgany",
        variants:[
          {
            size:"8ml",
            sku:"CAR-MOH-8",
            price:199,
            stock:15
          }
        ]
      }
    ]
  },



  // ================= DIFFUSER =================


  {
    name:"Luxury Diffuser Set",
    category:"Diffuser Set",
    image:"/images/Difuser set/Diffuser set.png",
    description:"Premium home diffuser set.",
    ingredients:"Fragrance oil",
    fragrances:[
      {
        name:"Luxury",
        variants:[
          {
            size:"Set",
            sku:"DIF-001",
            price:499,
            stock:10
          }
        ]
      }
    ]
  },



  // ================= TEALIGHTS =================


  {
    name:"Floating Tealights",
    category:"Tealights",
    image:"/images/Tealights/Floating tealights.png",
    description:"Beautiful floating tealights.",
    ingredients:"Wax",
    fragrances:[
      {
        name:"Floating",
        variants:[
          {
            size:"Pack",
            sku:"TEA-001",
            price:199,
            stock:20
          }
        ]
      }
    ]
  },



  // ================= URALI =================


  {
    name:"Urali Big",
    category:"Urali",
    image:"/images/Urali/Urali big.png",
    description:"Traditional decorative Urali.",
    ingredients:"Premium materials",
    fragrances:[
      {
        name:"Big",
        variants:[
          {
            size:"Big",
            sku:"URA-BIG",
            price:999,
            stock:5
          }
        ]
      }
    ]
  },



  // ================= WAX SACHETS =================


  {
    name:"Wax Sachets",
    category:"Wax Sachets",
    image:"/images/Wax sachets/Wax sachets.png",
    description:"Premium scented wax sachets.",
    ingredients:"Scented wax",
    fragrances:[
      {
        name:"Classic",
        variants:[
          {
            size:"1 Piece",
            sku:"WAX-001",
            price:149,
            stock:20
          }
        ]
      }
    ]
  }


];



const seedProducts = async()=>{


try{


await mongoose.connect(process.env.MONGO_URI);


console.log("MongoDB Connected");



await Product.insertMany(products);



console.log("Other Products Added Successfully");


process.exit();



}
catch(error){


console.log(error);

process.exit(1);


}



};



seedProducts();