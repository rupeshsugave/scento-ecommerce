const express = require("express");

const router = express.Router();

// Test API
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Scento API is running..."
    });
});

module.exports = router;