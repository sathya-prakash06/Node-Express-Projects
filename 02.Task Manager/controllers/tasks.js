const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const { createCustomAPIError } = require("../errors/custom-error");

// Get all tasks
const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();

  if (!tasks) {
    return next(createCustomAPIError("No tasks found", 404));
  }
  res.status(200).json({ success: true, tasks, length: tasks.length });
});

// Create a new task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);

  res.status(201).json({ success: true, task });
});

// Get a task by id
const getTaskById = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.id });

  if (!task) {
    return next(createCustomAPIError("No task found", 404));
  }

  res.status(200).json({ success: true, task });
});

// Update a task by id
const updateTask = asyncWrapper(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, task });
});

// Delete a task by id
const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findByIdAndDelete({ _id: req.params.id });

  if (!task) {
    return res.status(404).json({ success: false, err: "Task not found" });
  }

  res.json({ success: true });
});

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
