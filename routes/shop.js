const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const shopRouter = express.Router();

const { products } = require("./admin");
shopRouter.get("/", (req, res, next) => {
  console.log("products", products);

  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", {
    titleDoc: "Shop template",
    prods: products,
    path: "/",
    hasProducts: products.length > 0,
    isActiveShop: true,
  });
});

module.exports = {
  shopRouter,
};
