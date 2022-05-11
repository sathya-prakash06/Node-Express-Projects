const express = require("express");
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1", tasks);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
