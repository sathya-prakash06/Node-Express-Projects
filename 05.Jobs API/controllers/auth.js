// Register
// validate name , email and password with monbgoose
// hash password using bcrypt
// create a token
// send token to client
const User = require("../models/User");
const { BadRequestError, UnauthenticatedError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

// REGISTER
const register = async (req, res) => {
  const user = await User.create({ ...req.body });

  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.getName() }, token });
};

//  LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  // compare password
  const isMatch = await user.comparePassword(password);

  // if password is not correct return error
  if (!isMatch) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  // create token
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
