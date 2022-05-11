const Task = require("../models/task");

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, tasks });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, task });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
};

// Get a task by id
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById({ _id: req.params.id });

    if (!task) {
      return res.status(404).json({ success: false, err: "Task not found" });
    }

    res.status(200).json({ success: true, task });
    F;
  } catch (err) {
    res.status(404).json({ success: false, err });
  }
};

// Update a task by id
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, task });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
};

// Delete a task by id
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete({ _id: req.params.id });

    if (!task) {
      return res.status(404).json({ success: false, err: "Task not found" });
    }

    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
