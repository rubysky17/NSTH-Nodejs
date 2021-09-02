const express = require("express");
const shopRouter = express.Router();

const {
  getAllProduct,
  getIndex,
  getCart,
  getCheckout,
  getProduct,
  postCart,
} = require("../controllers/shop.controller");

shopRouter.get("/", getIndex);

shopRouter.get("/products", getAllProduct);

shopRouter.get("/product/:productId", getProduct);

shopRouter.get("/cart", getCart);

shopRouter.post("/cart", postCart);

shopRouter.get("/checkout", getCheckout);

module.exports = {
  shopRouter,
};
