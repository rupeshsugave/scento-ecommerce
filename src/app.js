const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const perfumeRoutes = require("./routes/perfumeRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());


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



module.exports = app;