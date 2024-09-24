require("dotenv").config;
console.log("Port from .env:", process.env.PORT);
const express = require("express");
const app = express();
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
// const { checkOverload } = require("./helpers/check.connect");
// checkOverload();
// init routes
app.get("/", (req, res, next) => {
  return res.status(500).json({
    message: "Welcome Hi",
  });
});
// handling error

module.exports = app;
