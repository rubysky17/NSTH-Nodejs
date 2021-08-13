const express = require("express");
const shopRouter = express.Router();

const { getAllProduct } = require("../controllers/Product-controller");

shopRouter.get("/", getAllProduct);

module.exports = {
  shopRouter,
};
