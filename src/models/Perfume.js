const mongoose = require("mongoose");


const perfumeSchema = new mongoose.Schema(

{

  name:{
    type:String,
    required:true,
    trim:true
  },


  fragrances:[

    {

      name:{
        type:String,
        required:true
      },


      variants:[

        {

          size:{
            type:String,
            required:true
          },


          sku:{
            type:String
          },


          price:{
            type:Number,
            required:true
          },


          stock:{
            type:Number,
            default:0
          }

        }

      ]

    }

  ],



  category:{
    type:String,
    default:"Perfume"
  },



  image:{
    type:String,
    required:true
  },



  description:{
    type:String,
    default:""
  }


},

{
 timestamps:true
}

);



module.exports = mongoose.model(
"Perfume",
perfumeSchema
);