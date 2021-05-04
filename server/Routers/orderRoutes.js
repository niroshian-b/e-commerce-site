const express = require("express");

const router = express.Router();

const { submitOrder } = require("./handlers/submitOrder");
//Router for submitting the orders
router.post("/submit", submitOrder);

module.exports = router;
