"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

const companyRouter = require("./Routers/companyRoutes");
const itemRouter = require("./Routers/itemRoutes");
const orderRouter = require("./Routers/orderRoutes.js");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .use("/order", orderRouter)
  .use("/companies", companyRouter)
  .use("/items", itemRouter)
  .get("/bacon", (req, res) => res.status(200).json("🥓"))
  .get("*", (req, res) => res.status(404).json("Error, you took a wrong turn"))
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
