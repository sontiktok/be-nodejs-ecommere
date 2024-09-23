const express = require("express");
const app = express();
const morgan = require("morgan");
const { default: helmet } = require("helmet");

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db

// init routes
app.get("/", (req, res, next) => {
  return res.status(500).json({
    message: "Welcome Hi",
  });
});
// handling error

module.exports = app;
