const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let idCounter = 1;

// ✅ GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ✅ GET single task
app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// ✅ POST - add task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: idCounter++,
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);
  res.json(newTask);
});

// ✅ PUT - update task
app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title || task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
});

// ✅ DELETE - delete task
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.filter(t => t.id !== id);

  res.json({ message: "Task deleted successfully" });
});

// ✅ Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});