const getAllTasks = (req, res) => {
  res.json({
    id: "hello",
  });
};

const createTask = (req, res) => {
  res.json(req.body);
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
