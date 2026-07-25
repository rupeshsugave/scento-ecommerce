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


        const {
            name,
            email,
            password
        } = req.body;



        const userExists =
        await User.findOne({
            email
        });



        if(userExists){


            return res.json({

                success:false,

                message:"User already exists"

            });


        }




        const salt =
        await bcrypt.genSalt(10);



        const hashedPassword =
        await bcrypt.hash(
            password,
            salt
        );




        const user =
        await User.create({

            name,

            email,

            password:hashedPassword,

            role:"customer"

        });




        res.json({

            success:true,

            message:"User registered successfully",

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








// ==========================
// LOGIN API
// ==========================

router.post("/login", async(req,res)=>{


    try{


        const {
            email,
            password
        } = req.body;




        const user =
        await User.findOne({

            email

        });





        if(!user){


            return res.json({

                success:false,

                message:"User not found"

            });


        }





        const isMatch =
        await bcrypt.compare(

            password,

            user.password

        );





        if(!isMatch){


            return res.json({

                success:false,

                message:"Invalid password"

            });


        }






        const token =
        jwt.sign(

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









// ==========================
// UPDATE PROFILE
// ==========================

router.put("/profile/:id", async(req,res)=>{


    try{


        const {
            name,
            email
        } = req.body;




        const user =
        await User.findByIdAndUpdate(

            req.params.id,

            {
                name,
                email
            },

            {
                new:true
            }

        );




        res.json({

            success:true,

            message:"Profile updated successfully",

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









// ==========================
// CHANGE PASSWORD
// ==========================

router.put("/change-password/:id", async(req,res)=>{


    try{


        const {
            oldPassword,
            newPassword
        } = req.body;





        const user =
        await User.findById(

            req.params.id

        );





        if(!user){


            return res.json({

                success:false,

                message:"User not found"

            });


        }





        const isMatch =
        await bcrypt.compare(

            oldPassword,

            user.password

        );





        if(!isMatch){


            return res.json({

                success:false,

                message:"Old password incorrect"

            });


        }







        const hashedPassword =
        await bcrypt.hash(

            newPassword,

            10

        );




        user.password =
        hashedPassword;



        await user.save();






        res.json({

            success:true,

            message:"Password changed successfully"

        });




    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


});









// ==========================
// DELETE ACCOUNT
// ==========================

router.delete("/:id", async(req,res)=>{


    try{


        await User.findByIdAndDelete(

            req.params.id

        );




        res.json({

            success:true,

            message:"Account deleted successfully"

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