const Product = require("../models/Product.model");
const Cart = require("../models/Cart.model");

// Lấy danh sách sản phẩm
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

// Lấy chi tiết sản phẩm
const getProduct = (req, res, next) => {
  const { productId } = req.params;

  Product.findById(productId, (product) => {
    res.render("shop/product-detail", {
      titleDoc: "Chi tiết sản phẩm",
      prods: product,
      path: `/products/${productId}`,
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

// Lấy thông tin giỏ hàng
const getCart = (req, res, next) => {
  res.render("shop/cart", {
    titleDoc: "Cart template",
    path: "/cart",
  });
};

const postCart = (req, res, next) => {
  const { productId } = req.body;

  Product.findById(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });

  res.send({
    message: "Thành công",
  });
};

// Lấy thông tin thanh toán
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
  getProduct,
  postCart,
};
