import React from "react";

function ProductCard({ name, price, category }) {
  return (
    <div style={{
      background: "white",
      padding: "15px",
      borderRadius: "10px",
      margin: "10px",
      width: "200px",
      boxShadow: "0 5px 10px rgba(0,0,0,0.2)"
    }}>
      <h3>{name}</h3>
      <p>₹{price}</p>
      <p>{category}</p>
    </div>
  );
}

export default ProductCard;