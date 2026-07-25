import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

function ForgotPassword() {

    const [email, setEmail] = useState("");

    const handleSubmit = () => {

        if (!email) {

            alert("Please enter your email.");

            return;

        }

        alert("Forgot Password feature will be available soon.");

    };

    return (

        <AuthLayout
            title="Forgot Password"
            subtitle="Enter your registered email"
        >

            <input

                type="email"

                placeholder="Enter your email"

                value={email}

                onChange={(e) => setEmail(e.target.value)}

                style={{

                    width: "100%",

                    padding: "14px",

                    marginBottom: "20px",

                    borderRadius: "10px",

                    border: "1px solid #555",

                    background: "#111",

                    color: "white"

                }}

            />

            <button

                onClick={handleSubmit}

                style={{

                    width: "100%",

                    padding: "14px",

                    background: "#d4af37",

                    color: "#111",

                    border: "none",

                    borderRadius: "30px",

                    fontWeight: "bold",

                    cursor: "pointer",

                    fontSize: "16px"

                }}

            >

                SEND RESET LINK

            </button>

            <p

                style={{

                    textAlign: "center",

                    marginTop: "20px",

                    color: "#ccc"

                }}

            >

                <Link

                    to="/login"

                    style={{

                        color: "#d4af37",

                        textDecoration: "none"

                    }}

                >

                    ← Back to Login

                </Link>

            </p>

        </AuthLayout>

    );

}

export default ForgotPassword;