const express = require("express");

const router = express.Router();

const {
  getAllItems,
  getItemById,
  getItemsByCategory,
  getItemsByBodyLocation,
  getItemsByCompanyId,
} = require("./handlers/itemHandlers");

//Router for retrieving items in a variety of ways
router.get("/", getAllItems);
router.get("/item/:id", getItemById);
router.get("/categories/:category", getItemsByCategory);
router.get("/bodyLocations/:bodyLocation", getItemsByBodyLocation);
router.get("/companies/:companyId", getItemsByCompanyId);

module.exports = router;
