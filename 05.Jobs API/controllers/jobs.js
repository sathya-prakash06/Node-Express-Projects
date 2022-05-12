const Job = require("../models/Job");
const { BadRequestError, UnauthenticatedError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");

// Get all jobs by user ID
const getAllJobs = async (req, res) => {
  const allJobs = await Job.find({ createdBy: req.user.userId }).sort({
    createdAt: 1,
  });
  res.status(StatusCodes.OK).json({ allJobs, count: allJobs.length });

  if (!allJobs) {
    throw new BadRequestError("No jobs found");
  }
  res.status(StatusCodes.OK).json({ allJobs });
};

// Get job by ID
const getJob = async (req, res) => {
  // nested destructuring
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findOne({ _id: jobId, createdBy: userId });

  if (!job) {
    throw new BadRequestError(`Job with id ${jobId} not found`);
  }
  res.status(StatusCodes.OK).json({ job, count: job.length });
};

// Create new job
const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create({ ...req.body });

  res.status(StatusCodes.CREATED).json({ job });
};

// Update Job by ID
const updateJob = async (req, res) => {
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId },
  } = req;

  if (!company || !position) {
    throw new BadRequestError("Company and position are required");
  }

  const job = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!job) {
    throw new BadRequestError(`Job with id ${jobId} not found`);
  }
  res.status(StatusCodes.OK).json({ job });
};

// DELETE Job by ID
const deleteJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const deleteJobs = await Job.findOneAndDelete({
    _id: jobId,
    createdBy: userId,
  });
  if (!deleteJobs) {
    throw new BadRequestError(`Job with id ${jobId} not found`);
  }
  res.status(StatusCodes.OK).json({ message: "Job deleted" });
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
