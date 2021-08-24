const express = require("express");
const adminRouter = express.Router();
const {
  renderAddProduct,
  addProduct,
  renderProducts,
} = require("../controllers/Admin.controller");

// /admin/add-product => GET
adminRouter.get("/add-product", renderAddProduct);

adminRouter.get("/admin-product", renderProducts);
// /admin/add-product => POST
adminRouter.post("/add-product", addProduct);

module.exports = {
  adminRouter,
};
