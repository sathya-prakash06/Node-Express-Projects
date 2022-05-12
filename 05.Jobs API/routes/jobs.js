const express = require("express");
const router = express.Router();

const {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} = require("../controllers/jobs");

router.route("/alljobs").post(register);
router.route("/login").post(login);

module.exports = router;
