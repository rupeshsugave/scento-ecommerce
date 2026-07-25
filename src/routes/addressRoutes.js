const express = require("express");

const router = express.Router();

const {
    addAddress,
    getAddresses,
    updateAddress,
    deleteAddress,
    makeDefault
} = require("../controllers/addressController");


// Add new address
router.post(
    "/",
    addAddress
);


// Get user's addresses
router.get(
    "/:userId",
    getAddresses
);


// Update address
router.put(
    "/:id",
    updateAddress
);


// Delete address
router.delete(
    "/:id",
    deleteAddress
);


// Set default address
router.put(
    "/default/:id",
    makeDefault
);


module.exports = router;