import React from "react";

function UserCard({ name, role }) {
  return (
    <div style={{
      background: "white",
      padding: "15px",
      borderRadius: "10px",
      margin: "10px",
      boxShadow: "0 5px 10px rgba(0,0,0,0.2)"
    }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default UserCard;