const { tasks, getNextId } = require("../models/taskModel");

// GET all
exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

// GET single
exports.getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
};

// POST
exports.createTask = (req, res) => {
  const newTask = {
    id: getNextId(),
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);
  res.json(newTask);
};

// PUT
exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  task.title = req.body.title || task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
};

// DELETE
exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) return res.status(404).json({ message: "Task not found" });

  tasks.splice(index, 1);
  res.json({ message: "Task deleted" });
};