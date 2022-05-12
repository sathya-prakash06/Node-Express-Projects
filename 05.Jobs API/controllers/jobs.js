const router = require("../routes/auth");

const getAllJobs = (req, res) => {
  res.send("getAllJobs");
};

const getJob = (req, res) => {
  res.send("getAllJobs");
};

const createJob = (req, res) => {
  res.send("getAllJobs");
};

const updateJob = (req, res) => {
  res.send("getAllJobs");
};

const deleteJob = (req, res) => {
  res.send("getAllJobs");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};

router.route("/").post(createJob).get(getAllJobs); 
router.route("/:id").get(getJob).put(updateJob).delete(deleteJob);
