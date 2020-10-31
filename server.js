//server file should not be related to Express, app should deal with Express
const app = require("./app");
const dotenv = require("dotenv");

//Load environment variable
dotenv.config({ path: "./config/config.env" });

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
