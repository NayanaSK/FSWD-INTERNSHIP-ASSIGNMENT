import React from "react";

function Filter({ setCategory }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Electronics")} style={{ marginLeft: "10px" }}>
        Electronics
      </button>
      <button onClick={() => setCategory("Fashion")} style={{ marginLeft: "10px" }}>
        Fashion
      </button>
    </div>
  );
}

export default Filter;