const items = require("../../data/items.json");

const getAllItems = (req, res) => {
  res.status(200).json({ status: 200, message: "all items", data: items });
};

const getItemById = (req, res) => {
  const item = items.find((item) => {
    return Number(item._id) === Number(req.params.id);
  });
  if (item) {
    res.status(200).json({ status: 200, message: "got item", data: item });
  } else {
    res.status(404).json({ status: 404, message: "item not found" });
  }
};

const getItemsByCategory = (req, res) => {
  const category = req.params.category;
  const itemList = items.filter((item) => {
    return item.category.toLowerCase() === category.toLowerCase();
  });

  if (itemList) {
    res
      .status(200)
      .json({ status: 200, message: "items by category", data: itemList });
  } else {
    res.status(404).json({ status: 404, message: "check category" });
  }
};

const getItemsByBodyLocation = (req, res) => {
  const bodyLocation = req.params.bodyLocation;
  const itemList = items.filter((item) => {
    return item.body_location.toLowerCase() === bodyLocation.toLowerCase();
  });

  if (itemList) {
    res
      .status(200)
      .json({ status: 200, message: "items by body location", data: itemList });
  } else {
    res.status(404).json({ status: 404, message: "check body location" });
  }
};

const getItemsByCompanyId = (req, res) => {
  const companyId = req.params.companyId;
  const itemList = items.filter((item) => {
    return Number(item.companyId) === Number(companyId);
  });

  if (itemList) {
    res
      .status(200)
      .json({ status: 200, message: "items by company Id", data: itemList });
  } else {
    res.status(404).json({ status: 404, message: "check company Id" });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  getItemsByCategory,
  getItemsByBodyLocation,
  getItemsByCompanyId,
};
