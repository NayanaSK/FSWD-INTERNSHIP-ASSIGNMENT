import React from "react";
import users from "../data/data";
import UserCard from "../components/UserCard";

function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
      padding: "30px",
      textAlign: "center",
      fontFamily: "Arial"
    }}>
      <h1>📁 Folder Architect Project</h1>

      {users.map((user) => (
        <UserCard key={user.id} name={user.name} role={user.role} />
      ))}
    </div>
  );
}

export default Home;