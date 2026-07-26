import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import type { CSSProperties } from "react";
import api from "../services/api";

function Payment() {
  const { cart, clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const address = location.state?.address;
  const [payment, setPayment] = useState("Cash On Delivery");

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const delivery = subtotal >= 999 ? 0 : 50;
  const discount = subtotal >= 1500 ? 100 : 0;
  const total = subtotal + delivery - discount;

  const placeOrder = async () => {
    const currentUser = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    try {
      const { data } = await api.post("/orders", {
        user: currentUser?._id,
        items: cart,
        address,
        paymentMethod: payment,
        subtotal,
        delivery,
        discount,
        total,
      });

      if (data.success) {
        clearCart();
        navigate("/order-success", {
          state: { orderId: data.order._id },
        });
      } else {
        alert(data.message || "Order Failed");
      }
    } catch (error: unknown) {
      const err = error as {
        response?: { data?: { message?: string } };
      };
      alert(err.response?.data?.message || "Order Failed");
    }
  };

  const pageStyle: CSSProperties = {
    background: "#050505",
    minHeight: "100vh",
    color: "white",
    padding: "40px 20px",
  };

  const titleStyle: CSSProperties = {
    textAlign: "center",
    color: "#d4af37",
    letterSpacing: "5px",
  };

  const mainContainer: CSSProperties = {
    maxWidth: "1200px",
    margin: "40px auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
  };

  const summaryCard: CSSProperties = {
    background: "#111",
    padding: "30px",
    borderRadius: "25px",
    border: "1px solid #333",
  };

  const paymentCard: CSSProperties = {
    background: "#111",
    padding: "30px",
    borderRadius: "25px",
    border: "1px solid #d4af37",
  };

  const heading: CSSProperties = {
    color: "#d4af37",
    marginBottom: "25px",
  };

  const productCard: CSSProperties = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #333",
  };

  const productImage: CSSProperties = {
    width: "80px",
    height: "100px",
    objectFit: "contain",
    background: "white",
    borderRadius: "10px",
  };

  const goldText: CSSProperties = {
    color: "#d4af37",
  };

  const row: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 0",
    fontSize: "18px",
  };

  const totalStyle: CSSProperties = {
    color: "#d4af37",
    textAlign: "right",
  };

  const paymentOption: CSSProperties = {
    background: "#1a1a1a",
    padding: "15px",
    borderRadius: "12px",
    margin: "15px 0",
    cursor: "pointer",
  };

  const labelStyle: CSSProperties = {
    cursor: "pointer",
    fontSize: "18px",
  };

  const addressBox: CSSProperties = {
    background: "#181818",
    padding: "15px",
    borderRadius: "15px",
    lineHeight: "1.8",
  };

  const placeButton: CSSProperties = {
    width: "100%",
    padding: "16px",
    marginTop: "25px",
    background: "#d4af37",
    border: "none",
    borderRadius: "15px",
    fontWeight: "bold",
    fontSize: "18px",
    cursor: "pointer",
  };

  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        <h1 style={titleStyle}>PAYMENT</h1>

        <div style={mainContainer}>
          <div style={summaryCard}>
            <h2 style={heading}>Order Summary</h2>

            {cart.map((item, index) => (
              <div key={index} style={productCard}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={productImage}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                  <h3 style={goldText}>
                    ₹{item.price * item.quantity}
                  </h3>
                </div>
              </div>
            ))}

            <hr />

            <div style={row}>
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div style={row}>
              <span>Delivery</span>
              <span>₹{delivery}</span>
            </div>
            <div style={row}>
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>

            <hr />

            <h1 style={totalStyle}>₹{total}</h1>
          </div>

          <div style={paymentCard}>
            <h2 style={heading}>Select Payment Method</h2>

            {[
              "Cash On Delivery",
              "UPI",
              "Credit / Debit Card",
              "Wallet",
              "Net Banking",
            ].map((method) => (
              <div key={method} style={paymentOption}>
                <label style={labelStyle}>
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === method}
                    onChange={() => setPayment(method)}
                  />
                  {" "}{method}
                </label>
              </div>
            ))}

            <h2 style={heading}>Delivery Details</h2>

            {address ? (
              <div style={addressBox}>
                <p>Name: {address.name}</p>
                <p>Phone: {address.phone}</p>
                <p>Address: {address.address}</p>
                <p>City: {address.city}</p>
                <p>State: {address.state}</p>
                <p>Pincode: {address.pincode}</p>
              </div>
            ) : (
              <p>No address found</p>
            )}

            <button onClick={placeOrder} style={placeButton}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;