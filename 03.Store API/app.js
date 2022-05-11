const expres = require("express");
require("dotenv").config();
require("express-async-errors");

const notFound = require("./middleware/not-found.js");
const errorHandler = require("./middleware/error-handler");

const app = expres();
const connectDB = require("./db/connect");
const router = require("./routes/products");
// middleware
app.use(expres.json());
app.use(expres.urlencoded({ extended: true }));

// routes
app.use("/api/v1/products", router);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT);
    console.log(`Server started on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

start();
