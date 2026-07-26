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
import Account from "./pages/Account";
import Addresses from "./pages/Addresses";
import Security from "./pages/Security";
import Wishlist from "./pages/Wishlist";

import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";

import Footer from "./components/Footer";


function App() {


  return (

    <>


    


      <Routes>


        <Route path="/" element={<Home />} />


        <Route path="/login" element={<Login />} />


        <Route path="/register" element={<Register />} />


        <Route path="/perfume/:id" element={<PerfumeDetails />} />


        <Route path="/cart" element={<Cart />} />


        <Route path="/checkout" element={<Checkout />} />


        <Route path="/payment" element={<Payment />} />


        <Route path="/collections" element={<Collections />} />


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


        <Route 
          path="/account" 
          element={<Account />} 
        />


        <Route 
          path="/addresses" 
          element={<Addresses />} 
        />


        <Route 
          path="/security" 
          element={<Security />} 
        />


        <Route 
          path="/wishlist" 
          element={<Wishlist />} 
        />


        <Route
          path="/shipping-policy"
          element={<ShippingPolicy />}
        />


        <Route
          path="/return-policy"
          element={<ReturnPolicy />}
        />


      </Routes>


      <Footer />


    </>

  );

}


export default App;