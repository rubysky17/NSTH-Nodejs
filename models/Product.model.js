const path = require("path");
const fs = require("fs");

const configPath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(configPath, (err, fileContent) => {
    // Do readFile là hàm bất đồng bộ nên phải truyền 1 cái callback function khi nào có đc kết quả của thằng readfile thì thằng cotroller mới chạy
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);

      fs.writeFile(configPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
