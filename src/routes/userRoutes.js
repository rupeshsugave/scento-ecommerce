const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


// ==========================
// REGISTER API
// ==========================

router.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;


        const userExists = await User.findOne({ email });


        if (userExists) {

            return res.json({

                success:false,

                message:"User already exists"

            });

        }



        const salt = await bcrypt.genSalt(10);


        const hashedPassword = await bcrypt.hash(
            password,
            salt
        );



        const user = await User.create({

            name,

            email,

            password: hashedPassword,

            role:"customer"

        });



        res.json({

            success:true,

            message:"User registered successfully",

            user

        });



    } catch(error) {


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

});




// ==========================
// LOGIN API
// ==========================

router.post("/login", async (req,res)=>{


    try{


        const {email,password}=req.body;



        const user = await User.findOne({

            email

        });



        if(!user){


            return res.json({

                success:false,

                message:"User not found"

            });


        }





        const isMatch = await bcrypt.compare(

            password,

            user.password

        );




        if(!isMatch){


            return res.json({

                success:false,

                message:"Invalid password"

            });


        }





        const token = jwt.sign(

            {
                id:user._id,
                role:user.role
            },

            "secretkey123",

            {
                expiresIn:"7d"
            }

        );






        res.json({

            success:true,

            message:"Login successful",

            token,

            user

        });




    }

    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


});





module.exports = router;