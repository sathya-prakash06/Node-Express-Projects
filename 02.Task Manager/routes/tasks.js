const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");

router.route("/tasks").get(getAllTasks).post(createTask);
router.route("/tasks/:id").put(updateTask).delete(deleteTask);

module.exports = router;
