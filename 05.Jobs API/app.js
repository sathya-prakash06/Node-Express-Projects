require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");

// connectDB
const connectDB = require("./db/connect");

// middleware
const authenticateMiddleware = require("./middleware/authentication");

// routers
const authRouter = require("./routes/auth.js");
const jobsRouter = require("./routes/jobs.js");

app.set("trust proxy", true);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Job's API");
});
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateMiddleware, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
