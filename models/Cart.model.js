const fs = require("fs");
const path = require("path");

const configPath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  //Đối với model giỏ hàng chúng ta không cần hàm khởi tạo
  //   constructor() {
  //     this.product = [];
  //     this.totalPrice = 0;
  //   }

  static addProduct(id, productPrice) {
    // Fetch giỏ hàng trước đó
    fs.readFile(configPath, (err, fileContent) => {
      let cart = {
        products: [], // Danh sách sản phẩm
        totalPrice: 0, // Tổng tiền
      };

      // Phân tích giỏ hàng => tìm sản phẩm đã tồn tại
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const index = cart.products.findIndex((prod) => {
        return id === prod.id;
      });

      let updateProduct;

      // Bài toán: Thêm sản phẩm hoặc gia tăng số lượng

      if (index !== -1) {
        // trường hợp sản phẩm dã trong giỏ hàng
        // Bốc sản phẩm thử index ra
        updateProduct = { ...cart.products[index] };
        // Tăng sống lượng lên 1
        updateProduct.qty = updateProduct.qty + 1;
        // clone lại mảng sản phẩm
        cart.products = [...cart.products];
        // Gán sản phẩm thử index trong mãng cũ bằng sản phẩm cập nhật mới
        cart.products[index] = updateProduct;
      } else {
        // Trường hợp không có sản phẩm bên trong giỏ hàng
        updateProduct = { id: id, qty: 1 };
        // Clone lại mảng cũ và thêm sản phẩm mới vào
        cart.products = [...cart.products, updateProduct];
      }

      // Câp nhật lại giá
      cart.totalPrice = +cart.totalPrice + +productPrice;

      fs.writeFile(configPath, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
