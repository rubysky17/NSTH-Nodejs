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

const renderEditProduct = (req, res, next) => {
  // Check query xem có ở chế độ edit hay không
  const editMode = req.query.edit;
  // Get Id product
  const { productId } = req.params;

  if (!editMode) {
    return res.redirect("/");
  }

  Product.findById(productId, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      titleDoc: "Edit Product",
      path: "/edit-product",
      editing: true,
      product: product,
    });
  });
};

module.exports = {
  renderAddProduct,
  addProduct,
  renderProducts,
  renderEditProduct,
};
