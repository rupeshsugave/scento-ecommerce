import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import { useState } from "react";
import type { CSSProperties } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async () => {

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.subject ||
      !form.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {

      setLoading(true);

      const res = await api.post(
        "/contact",
        form
      );

      if (res.data.success) {

        setSuccess(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);

      }

    } catch (error) {

      console.log(error);
      alert("Unable to send message.");

    } finally {

      setLoading(false);

    }

  };  return (

    <>

      <Navbar />

      <div style={pageStyle}>

        {success && (

          <div style={successPopup}>

            ✅ Your message has been sent successfully!

          </div>

        )}

        <h1 style={titleStyle}>

          CONTACT US

        </h1>

        <p style={subtitleStyle}>

          We'd love to hear from you.

        </p>

        <div style={containerStyle}>

          <div style={leftCard}>

            <h2 style={headingStyle}>

              Send us a Message

            </h2>

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              style={textareaStyle}
            />

            <button
              style={buttonStyle}
              onClick={handleSubmit}
            >

              {loading ? "Sending..." : "SEND MESSAGE"}

            </button>

          </div>

          <div style={rightCard}>

            <h2 style={headingStyle}>

              Contact Information

            </h2>

            <p style={infoStyle}>
              📍 Pune, Maharashtra, India
            </p>

            <p style={infoStyle}>
              📞 +91 9876543210
            </p>

            <p style={infoStyle}>

📧 scento999@gmail.com

</p>

            <p style={infoStyle}>
              🕒 Monday - Saturday
              <br />
              10:00 AM - 7:00 PM
            </p>

            <div style={dividerStyle} />

            <h3 style={headingStyle}>

              Why Choose Scento?

            </h3>

            <ul style={listStyle}>

              <li>✔ Premium Handmade Products</li>

              <li>✔ Affordable Luxury</li>

              <li>✔ Fast Customer Support</li>

              <li>✔ Secure Payments</li>

              <li>✔ Trusted by Customers</li>

            </ul>

          </div>

        </div>

      </div>

      <Footer />

    </>

  );

}const pageStyle: CSSProperties = {
  background: "#050505",
  minHeight: "100vh",
  padding: "50px 20px",
  color: "#ffffff"
};

const titleStyle: CSSProperties = {
  textAlign: "center",
  fontSize: "42px",
  color: "#d4af37",
  letterSpacing: "3px",
  marginBottom: "10px"
};

const subtitleStyle: CSSProperties = {
  textAlign: "center",
  color: "#bbbbbb",
  fontSize: "18px",
  marginBottom: "40px"
};

const containerStyle: CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
  gap: "30px"
};

const leftCard: CSSProperties = {
  background: "#111111",
  border: "1px solid #2b2b2b",
  borderRadius: "20px",
  padding: "35px"
};

const rightCard: CSSProperties = {
  background: "#111111",
  border: "1px solid #2b2b2b",
  borderRadius: "20px",
  padding: "35px"
};

const headingStyle: CSSProperties = {
  color: "#d4af37",
  marginBottom: "25px"
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  background: "#1b1b1b",
  border: "1px solid #333",
  borderRadius: "10px",
  color: "#fff",
  outline: "none",
  boxSizing: "border-box"
};

const textareaStyle: CSSProperties = {
  width: "100%",
  height: "170px",
  padding: "14px",
  marginBottom: "20px",
  background: "#1b1b1b",
  border: "1px solid #333",
  borderRadius: "10px",
  color: "#fff",
  outline: "none",
  resize: "vertical",
  boxSizing: "border-box"
};

const buttonStyle: CSSProperties = {
  width: "100%",
  padding: "15px",
  background: "#d4af37",
  color: "#000",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer"
};

const infoStyle: CSSProperties = {
  color: "#dddddd",
  marginBottom: "18px",
  fontSize: "16px",
  lineHeight: "28px"
};

const dividerStyle: CSSProperties = {
  height: "1px",
  background: "#333",
  margin: "30px 0"
};

const listStyle: CSSProperties = {
  color: "#cccccc",
  lineHeight: "2"
};

const successPopup: CSSProperties = {
  position: "fixed",
  top: "90px",
  right: "30px",
  background: "#d4af37",
  color: "#000",
  padding: "15px 25px",
  borderRadius: "12px",
  fontWeight: "bold",
  zIndex: 9999,
  boxShadow: "0 10px 30px rgba(0,0,0,.35)"
};

export default Contact;