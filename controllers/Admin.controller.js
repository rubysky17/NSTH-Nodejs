const Product = require("../models/Product.model");

const renderAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    titleDoc: "Add Product",
    path: "/add-product",
    isActiveProduct: true,
  });
};

const renderProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      titleDoc: "Products admin template",
      prods: products,
      path: "/admin-product",
      hasProducts: products.length > 0,
      isActiveShop: true,
    });
  });
};

const addProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  // Tạo Object instance
  const product = new Product(title, imageUrl, description, price);

  //Phương thức save chỉ cah5y đối với object instance
  product.save();

  res.redirect("/");
};

module.exports = {
  renderAddProduct,
  addProduct,
  renderProducts,
};
