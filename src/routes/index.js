const express = require("express");
const router = express.Router();


const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");
const addressRoutes = require("./addressRoutes");



// BASE TEST ROUTE

router.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "Scento API is running..."

    });

});




// USER ROUTES

router.use(
    "/users",
    userRoutes
);




// ORDER ROUTES

router.use(
    "/orders",
    orderRoutes
);




// ADDRESS ROUTES

router.use(
    "/addresses",
    addressRoutes
);



module.exports = router;