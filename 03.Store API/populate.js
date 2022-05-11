//To add json data to the database

require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");
const jsonfile = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("Connected to DB");
    await Product.deleteMany({});
    await Product.insertMany(jsonfile);
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

start();
