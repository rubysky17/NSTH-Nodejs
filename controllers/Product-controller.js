const Product = require("../models/Product.model");

const renderAddProduct = (req, res, next) => {
  res.render("add-product", {
    titleDoc: "Add Product",
    path: "/add-product",
    isActiveProduct: true,
  });
};

const addProduct = (req, res, next) => {
  // Tạo Object instance
  const product = new Product(req.body.title);

  //Phương thức save chỉ cah5y đối với object instance
  product.save();

  res.redirect("/");
};

const getAllProduct = (req, res, next) => {
  // static function bên lớp đối tượng không cần tạo Object instance
  Product.fetchAll((products) => {
    res.render("shop", {
      titleDoc: "Shop template",
      prods: products,
      path: "/",
      hasProducts: products.length > 0,
      isActiveShop: true,
    });
  });
};

module.exports = {
  renderAddProduct,
  addProduct,
  getAllProduct,
};
