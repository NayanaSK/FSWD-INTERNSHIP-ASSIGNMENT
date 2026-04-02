const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

// use routes
app.use("/", taskRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});