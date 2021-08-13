const express = require("express");
const adminRouter = express.Router();
const {
  renderAddProduct,
  addProduct,
} = require("../controllers/Product-controller");

const products = [];

// /admin/add-product => GET
adminRouter.get("/add-product", renderAddProduct);
// /admin/add-product => POST
adminRouter.post("/add-product", addProduct);

module.exports = {
  adminRouter,
  products,
};
