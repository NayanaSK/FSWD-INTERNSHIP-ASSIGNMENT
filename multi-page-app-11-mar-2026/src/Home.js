import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #f6d365, #fda085)",
      fontFamily: "Arial"
    }}>
      <h1 style={{ color: "#ff6f61", fontSize: "36px", marginBottom: "20px" }}>
        🌟 My Internship Assignments 🌟
      </h1>

      <div>
        <Link to="/weather">
          <button style={{
            margin: "10px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "12px",
            background: "#4CAF50",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}>Weather Dashboard</button>
        </Link>

        <Link to="/tasks">
          <button style={{
            margin: "10px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "12px",
            background: "#2196F3",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}>Task List</button>
        </Link>
      </div>

      <section style={{
        marginTop: "50px",
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        maxWidth: "600px",
        textAlign: "center"
      }}>
        <h2>Hello, I'm Maheshwari</h2>
        <p>
          Electronics and Communication Engineering student passionate about
          technology, embedded systems, and data analytics.
        </p>
        <a href="https://www.linkedin.com/in/mahi12" target="_blank" rel="noreferrer" style={{
          textDecoration:"none",
          color:"white",
          background:"#0077b5",
          padding:"10px 20px",
          borderRadius:"8px",
          display:"inline-block",
          marginTop:"10px"
        }}>Connect with me</a>
      </section>
    </div>
  );
}

export default Home;