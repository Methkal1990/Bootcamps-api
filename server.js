const express = require("express");
const dotenv = require("dotenv");
const bootcamps = require("./routes/bootcamps");
const connectDB = require("./config/db");
const colors = require("colors");

const morgan = require("morgan");

// load env vars
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

// Body Parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgBlue,
  ),
);

// handle unhandld promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.bgRed);
  server.close(() => process.exit(1));
});
