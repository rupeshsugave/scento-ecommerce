const express = require("express");

const router = express.Router();

const Wishlist = require("../models/Wishlist");




// ==========================
// ADD TO WISHLIST
// ==========================

router.post("/", async(req,res)=>{


    try{


        const {
            userId,
            productId,
            name,
            image,
            price
        } = req.body;




        let wishlist = await Wishlist.findOne({

            userId

        });





        if(!wishlist){


            wishlist = new Wishlist({

                userId,

                products:[]

            });


        }






        const exists = wishlist.products.find(

            item =>

            item.productId.toString() === productId

        );





        if(exists){


            return res.json({

                success:false,

                message:"Product already in wishlist"

            });


        }







        wishlist.products.push({

            productId,

            name,

            image,

            price

        });





        await wishlist.save();





        res.json({

            success:true,

            message:"Added to wishlist",

            wishlist

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
// GET WISHLIST
// ==========================

router.get("/:userId", async(req,res)=>{


    try{


        const wishlist = await Wishlist.findOne({

            userId:req.params.userId

        });





        res.json({

            success:true,

            wishlist

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
// REMOVE FROM WISHLIST
// ==========================

router.delete("/:userId/:productId", async(req,res)=>{


    try{


        const wishlist = await Wishlist.findOne({

            userId:req.params.userId

        });





        if(!wishlist){


            return res.json({

                success:false,

                message:"Wishlist not found"

            });


        }







        wishlist.products =
        wishlist.products.filter(

            item =>

            item.productId.toString()
            !== req.params.productId

        );





        await wishlist.save();





        res.json({

            success:true,

            message:"Removed from wishlist",

            wishlist

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