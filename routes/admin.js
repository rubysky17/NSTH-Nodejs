const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const admimRouter = express.Router();

const products = [];
// /admin/add-product => GET
admimRouter.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    titleDoc: "Add Product",
    path: "/add-product",
    isActiveProduct: true,
  });
});

// /admin/add-product => POST
admimRouter.post("/add-product", (req, res, next) => {
  const { title } = req.body;
  products.push({
    title,
  });

  res.redirect("/");
});

module.exports = {
  admimRouter,
  products,
};
