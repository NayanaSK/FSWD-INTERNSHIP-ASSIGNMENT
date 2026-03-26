import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

function Home() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div style={{
      minHeight: "100vh",
      padding: "20px",
      background: "linear-gradient(135deg,#74ebd5,#ACB6E5)",
      fontFamily: "Arial"
    }}>
      <h1 style={{ textAlign: "center" }}>🛒 Product Listing</h1>

      <div style={{ textAlign: "center" }}>
        <Filter setCategory={setCategory} />
      </div>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            category={p.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;