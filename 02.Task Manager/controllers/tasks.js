const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.json({
    id: "hello",
  });
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, task });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
};

const updateTask = (req, res) => {
  res.json(req.body);
};

const deleteTask = (req, res) => {
  res.json("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
