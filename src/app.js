const express = require("express");
const cors = require("cors");
const indexRoutes = require("./routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", indexRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 Welcome to Scento Backend");
});

module.exports = app;