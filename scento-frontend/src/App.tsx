import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PerfumeDetails from "./pages/PerfumeDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Collections from "./pages/Collections";
import CategoryProducts from "./pages/CategoryProducts";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import AdminOrders from "./pages/AdminOrders";

import RefreshRedirect from "./components/RefreshRedirect";
import Footer from "./components/Footer";


function App() {


  return (

    <>


      <RefreshRedirect />


      <Routes>


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/register"
          element={<Register />}
        />


        <Route
          path="/perfume/:id"
          element={<PerfumeDetails />}
        />


        <Route
          path="/cart"
          element={<Cart />}
        />


        <Route
          path="/checkout"
          element={<Checkout />}
        />


        <Route
          path="/payment"
          element={<Payment />}
        />


        <Route
          path="/collections"
          element={<Collections />}
        />


        <Route
          path="/category/:category"
          element={<CategoryProducts />}
        />


        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />


        <Route
          path="/my-orders"
          element={<MyOrders />}
        />


        <Route
          path="/admin-orders"
          element={<AdminOrders />}
        />


      </Routes>



      <Footer />


    </>

  );

}


export default App;