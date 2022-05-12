require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// connectDB
const connectDB = require("./db/connect");

// middleware
const authenticateMiddleware = require("./middleware/authentication");

// routers
const authRouter = require("./routes/auth.js");
const jobsRouter = require("./routes/jobs.js");

app.use(express.json());
// extra packages

// routes
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
