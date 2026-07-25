const mongoose = require("mongoose");
const User = require("./src/models/User");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)

.then(async()=>{

const emails = [

    "rupeshsugave@gmail.com",

    "scento999@gmail.com"

];

const result = await User.updateMany(

    {
        email: {
            $in: emails
        }
    },

    {
        role: "admin"
    }

);

console.log("Admin Updated Successfully");
console.log(result);

process.exit();

})

.catch((error)=>{

console.log(error);

process.exit();

});