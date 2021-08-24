const Product = require("../models/Product.model");

const getAllProduct = (req, res, next) => {
  // static function bên lớp đối tượng không cần tạo Object instance
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      titleDoc: "Shop template",
      prods: products,
      path: "/products",
      hasProducts: products.length > 0,
      isActiveShop: true,
    });
  });
};

const getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      titleDoc: "Shop template",
      prods: products,
      path: "/",
      hasProducts: products.length > 0,
      isActiveShop: true,
    });
  });
};

const getCart = (req, res, next) => {
  res.render("shop/cart", {
    titleDoc: "Cart template",
    path: "/cart",
  });
};

const getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    titleDoc: "checkout template",
    path: "/checkout",
  });
};

module.exports = {
  getAllProduct,
  getIndex,
  getCart,
  getCheckout,
};
