const mongoose = require("mongoose");
const User = require("./src/models/User");
require("dotenv").config();


mongoose.connect(process.env.MONGO_URI)

.then(async()=>{


const emails = [

    "ADMIN_EMAIL_1",

    "ADMIN_EMAIL_2"

];



const result = await User.updateMany(

    {
        email:{
            $in: emails
        }
    },

    {
        role:"admin"
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