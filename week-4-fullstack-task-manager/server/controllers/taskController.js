
let tasks = require("../data/tasks");

const getTasks = (req, res) => {
  res.json(tasks);
};

const addTask = (req, res) => {
  const title = req.body.title?.trim();

  if (!title) {
    return res.status(400).json({ message: "Task title is required" });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) {
    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({ message: "Valid title is required" });
    }
    task.title = title.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "Completed must be boolean" });
    }
    task.completed = completed;
  }

  res.json(task);
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);

  res.json({ message: "Task deleted successfully" });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};
