const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

//Load environment variable
dotenv.config({ path: "./config/config.env" });

//connect database
connectDB();

app.get("/", (req, res) => {
  res.send("API is working");
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});
