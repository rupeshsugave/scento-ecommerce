const express = require("express");
const router = express.Router();

const Order = require("../models/Order");



// ===========================
// CREATE ORDER
// ===========================

router.post("/", async (req, res) => {

    try {

        const order = await Order.create(req.body);

        res.status(201).json({

            success: true,
            message: "Order placed successfully",
            order

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,
            message: "Order failed"

        });

    }

});



// ===========================
// GET ORDERS OF LOGGED-IN USER
// ===========================

router.get("/user/:userId", async (req, res) => {

    try {

        const orders = await Order.find({

            user: req.params.userId

        }).sort({

            createdAt: -1

        });


        res.json({

            success: true,
            orders

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,
            message: "Unable to fetch user orders"

        });

    }

});



// ===========================
// GET ALL ORDERS (ADMIN)
// ===========================

router.get("/", async (req, res) => {

    try {

        const orders = await Order.find()

            .sort({

                createdAt: -1

            });


        res.json({

            success: true,
            orders

        });

    }

    catch (error) {

        console.log(error);


        res.status(500).json({

            success: false,
            message: "Unable to fetch orders"

        });

    }

});



// ===========================
// UPDATE ORDER STATUS (ADMIN)
// ===========================

router.put("/:id/status", async (req, res) => {

    try {

        const { status } = req.body;


        const order = await Order.findByIdAndUpdate(

            req.params.id,

            {
                status: status
            },

            {
                new: true
            }

        );


        if(!order){

            return res.status(404).json({

                success:false,

                message:"Order not found"

            });

        }


        res.json({

            success:true,

            message:"Order status updated",

            order

        });


    }

    catch(error){

        console.log(error);


        res.status(500).json({

            success:false,

            message:"Unable to update status"

        });

    }

});



module.exports = router;