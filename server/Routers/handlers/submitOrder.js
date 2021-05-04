const items = require("../../data/items.json");
const orders = require("../../data/orders.json");

const submitOrder = (req, res) => {
  //Handle ordering the products from the database
  const {
    cart,
    firstName,
    lastName,
    email,
    address1,
    address2,
    phoneNumber,
  } = req.body;

  const orderDate = new Date(Date.now());

  const orderDetails = {
    orderDate,
    cart,
    firstName,
    lastName,
    email,
    address1,
    address2,
    phoneNumber,
  };

  if (cart.length < 1) {
    return res.status(400).json({ status: "error", error: "cart is empty" });
  }
  //Validate the data
  //does the email include @
  if (!email.includes("@")) {
    return res.status(400).json({
      status: "error",
      error: "invalid email",
    });
  }

  //cart will be an array of objects called items matching items in data but with quantity of the items the customer wants included in the object
  let outOfStock = false;
  cart.forEach((item) => {
    //check if all items are still in stock on the server
    if (item.quantity > item["numInStock"]) {
      outOfStock = true;
    }
  });

  if (outOfStock) {
    res.status(400).json({ status: "error", error: "item-out-of-stock" });
  } else {
    cart.forEach((item) => {
      const dataItemIndex = items.findIndex((stock) => stock._id === item._id);
      items[dataItemIndex].numInStock -= item.quantity;
    });

    orders.push(orderDetails);
    res.status(200).json({ status: "success" });
  }
};

module.exports = { submitOrder };
