const express = require("express");

const router = express.Router();

const {
  getAllCompanies,
  getCompanyById,
  getCompaniesByCountry,
} = require("./handlers/companyHandlers");

router.get("/", getAllCompanies);
router.get("/company/:companyId", getCompanyById);
router.get("/country/:countryName", getCompaniesByCountry);

module.exports = router;
