const express = require("express");
const fs = require("fs");
const methodOverride = require("method-override");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

const mainRoute = require("./routes/main");
const connectionRoute = require("./routes/connection");

// set the view engine to ejs
app.set("view engine", "ejs");

// enabling styles/images to be served from public
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// database
mongoose
  .connect("mongodb://127.0.0.1:27017/NBAD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // starting the server
    app.listen(8084, () => {
      console.log("Stating server, Listening on port 8084");
    });
  })
  .catch((err) => {
    console.log("failed to connect database", err);
  });

// router modules
app.use("/", mainRoute);
app.use("/connections", connectionRoute);

// error handling
app.use((req, res, next) => {
  let err = new Error("The server cannot locate " + req.url);
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  if (!err.status) {
    err.status = 500;
    err.message = "Internal Server Error";
  }
  res.status(err.status);
  res.render("error", { error: err });
});
