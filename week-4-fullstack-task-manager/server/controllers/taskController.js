
const Task = require("../models/Task");

const getTasks = async (req, res) => {
  try {
    const filter = { user: req.user._id };

    if (req.query.completed === "true") {
      filter.completed = true;
    } else if (req.query.completed === "false") {
      filter.completed = false;
    }

    const tasks = await Task.find(filter).sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({
        message: "Task title is required"
      });
    }

    const task = await Task.create({
      title: title.trim(),
      user: req.user._id
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to create task" });
  }
};

const updateTask = async (req, res) => {
  try {
    const updates = {};

    if (req.body.title !== undefined) {
      if (
        typeof req.body.title !== "string" ||
        !req.body.title.trim()
      ) {
        return res.status(400).json({
          message: "Valid task title is required"
        });
      }

      updates.title = req.body.title.trim();
    }

    if (req.body.completed !== undefined) {
      if (typeof req.body.completed !== "boolean") {
        return res.status(400).json({
          message: "Completed must be true or false"
        });
      }

      updates.completed = req.body.completed;
    }

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      updates,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    res.status(500).json({ message: "Failed to update task" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    res.status(500).json({ message: "Failed to delete task" });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};
