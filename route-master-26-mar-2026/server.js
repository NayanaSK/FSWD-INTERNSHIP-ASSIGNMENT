const express = require("express");
const app = express();

// Dummy Data
const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
];

const authors = [
  { id: 1, name: "James Clear" },
  { id: 2, name: "Robert Kiyosaki" }
];

// Routes
app.get("/", (req, res) => {
  res.send("📚 Welcome to Bookstore API");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/authors", (req, res) => {
  res.json(authors);
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});