const companies = require("../../data/companies.json");

const getAllCompanies = (req, res) => {
  //GET all companies from the database
  res
    .status(200)
    .json({ status: 200, message: "got all Companies", data: companies });
};

const getCompanyById = (req, res) => {
  //GET a specific company using the company ID number
  console.log(req.params);
  const company = companies.find((company) => {
    return Number(company._id) === Number(req.params.companyId);
  });
  console.log(company);
  if (company) {
    res
      .status(200)
      .json({ status: 200, message: "got company", data: company });
  } else {
    res.status(404).json({ status: 404, message: "company not found" });
  }
};

const getCompaniesByCountry = (req, res) => {
  //GET a list of companies from a specified country
  const country = req.params.countryName;
  const companyList = companies.filter((company) => {
    return (
      company.country.split(" ").join("").toLowerCase() ===
      country.toLowerCase()
    );
  });

  if (companyList) {
    res.status(200).json({
      status: 200,
      message: "companies by country",
      data: companyList,
    });
  } else {
    res.status(404).json({ status: 404, message: "check country name" });
  }
};

module.exports = {
  getAllCompanies,
  getCompanyById,
  getCompaniesByCountry,
};
