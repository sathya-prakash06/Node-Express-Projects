const express = require("express");
const tasks = require("./routes/tasks.js");

const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/v1", tasks);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
