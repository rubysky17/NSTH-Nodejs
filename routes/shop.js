const express = require("express");
const shopRouter = express.Router();

const {
  getAllProduct,
  getIndex,
  getCart,
  getCheckout,
} = require("../controllers/shop.controller");

shopRouter.get("/", getIndex);

shopRouter.get("/products", getAllProduct);

shopRouter.get("/cart", getCart);

shopRouter.get("/checkout", getCheckout);

module.exports = {
  shopRouter,
};
