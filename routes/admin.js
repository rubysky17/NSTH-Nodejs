const express = require("express");
const adminRouter = express.Router();
const {
  renderAddProduct,
  addProduct,
  renderProducts,
  renderEditProduct,
} = require("../controllers/Admin.controller");

// /admin/add-product => GET
adminRouter.get("/add-product", renderAddProduct);

adminRouter.get("/admin-product", renderProducts);
// /admin/add-product => POST
adminRouter.post("/add-product", addProduct);

adminRouter.get("/edit-product/:productId", renderEditProduct);

// adminRouter.put("/edit-product");

module.exports = {
  adminRouter,
};
