const jwt = require("jsonwebtoken");
const customAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  //   console.log(username, password);

  if (!username || !password) {
    throw new customAPIError("Username and password are required", 400);
  }

  // dummy id
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ message: "token created successfully", token });
};

const dashboard = async (req, res) => {
  const luckNum = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckNum}`,
  });
};

module.exports = {
  login,
  dashboard,
};
