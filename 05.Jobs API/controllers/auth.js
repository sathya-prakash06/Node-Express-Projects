// Register
// validate name , email and password with monbgoose
// hash password using bcrypt
// create a token
// send token to client
const User = require("../models/User");
const { BadRequestError } = require("../errors/index");
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
  res.send("login");
};

module.exports = {
  register,
  login,
};
