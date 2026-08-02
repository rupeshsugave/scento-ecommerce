const express = require("express");
const cors = require("cors");
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const perfumeRoutes = require("./routes/perfumeRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const addressRoutes = require("./routes/addressRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Wishlist temporarily disabled
// const wishlistRoutes = require("./routes/wishlistRoutes");

const app = express();

app.use(cors());

app.use(express.json());

// Serve static image files
app.use(
  "/images",
  express.static(path.join(__dirname, "../images"))
);

app.get("/", (req, res) => {
  res.send("Scento Backend Running 🚀");
});

// User Routes
app.use("/api/users", userRoutes);

// Perfume Routes
app.use("/api/perfumes", perfumeRoutes);

// Cart Routes
app.use("/api/cart", cartRoutes);

// Order Routes
app.use("/api/orders", orderRoutes);

// Address Routes
app.use("/api/addresses", addressRoutes);

// Contact Routes
app.use("/api/contact", contactRoutes);

// Wishlist Routes (temporarily disabled)
// app.use("/api/wishlist", wishlistRoutes);

module.exports = app;