const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:false
},


items:[

{

name:String,

image:String,

size:String,

price:Number,

quantity:Number,

total:Number

}

],


address:{


name:String,

email:String,

phone:String,

address:String,

city:String,

state:String,

pincode:String

},


paymentMethod:String,


subtotal:Number,

delivery:Number,

discount:Number,

total:Number,


status:{


type:String,

default:"Placed"

}


},


{
timestamps:true
}

);



module.exports = mongoose.model("Order",orderSchema);