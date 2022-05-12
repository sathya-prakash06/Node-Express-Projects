const express = require("express");
const authMiddleware = require('../middleware/auth');
const router = express.Router();

const { dashboard, login } = require("../controllers/main");

router.route("/dashboard").get(authMiddleware,dashboard);
router.route("/login").post(login);

module.exports = router;
