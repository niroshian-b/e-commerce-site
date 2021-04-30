const express = require("express");

const router = express.Router();

const { submitOrder } = require("./handlers/submitOrder");

router.post("/submit", submitOrder);

module.exports = router;
