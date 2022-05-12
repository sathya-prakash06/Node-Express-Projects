// Register
// validate name , email and password with monbgoose
// hash password using bcrypt
// create a token
// send token to client

const User = require("../models/User");
const { BadRequestError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  // validating name , email and password
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all required fields");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const tempUser = { name, email, password: hashedPassword };

  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
