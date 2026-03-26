import React, { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setMessage("⚠ All fields are required!");
      setMessageType("error");
      return;
    }

    if (!emailRegex.test(email)) {
      setMessage("⚠ Enter a valid email!");
      setMessageType("error");
      return;
    }

    if (password.length < 6 || !passwordRegex.test(password)) {
      setMessage("⚠ Password must be 6+ characters, include a number & special character!");
      setMessageType("error");
      return;
    }

    setMessage("✔ Signup successful!");
    setMessageType("success");

    setFormData({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #74ebd5, #acb6e5)",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        width: "350px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        <h1>📝 Signup Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#FF9800",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p style={{
            color: messageType === "error" ? "red" : "green",
            marginTop: "15px"
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default SignupForm;