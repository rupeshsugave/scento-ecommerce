import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {

    if (!name || !email || !password) {
      setError("Please fill all details");
      return;
    }

    if (password.length < 6) {
      setError("Password must be minimum 6 characters");
      return;
    }

    try {

      setLoading(true);
      setError("");

      const { data } = await api.post("/users/register", {
        name,
        email,
        password,
      });

      if (data.success) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        setError(data.message || "Registration Failed");
      }

    } catch (error: any) {

      console.log(error);

      setError(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <AuthLayout
      title="Create Account"
      subtitle="Join Scento today"
    >

      {error && (
        <div
          style={{
            background: "#8b0000",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "15px",
          borderRadius: "10px",
          border: "1px solid #555",
          background: "#111",
          color: "white",
        }}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "15px",
          borderRadius: "10px",
          border: "1px solid #555",
          background: "#111",
          color: "white",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #555",
          background: "#111",
          color: "white",
        }}
      />

      <button
        onClick={handleRegister}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#d4af37",
          color: "black",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        {loading ? "Creating Account..." : "REGISTER"}
      </button>

      <p
        style={{
          marginTop: "20px",
          textAlign: "center",
          color: "#ccc",
        }}
      >
        Already have an account?{" "}
        <Link
          to="/login"
          style={{
            color: "#d4af37",
          }}
        >
          Login
        </Link>
      </p>

    </AuthLayout>

  );

}

export default Register;