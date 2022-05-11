const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  getTaskById,
} = require("../controllers/tasks");

router.route("/tasks").get(getAllTasks).post(createTask);
router.route("/tasks/:id").patch(updateTask).delete(deleteTask).get(getTaskById);

module.exports = router;
