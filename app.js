const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
app.use(bodyParser.urlencoded({ extended: false }));

// import routers
const { admimRouter } = require("./routes/admin");
const { shopRouter } = require("./routes/shop");

// Json body parser
app.use(express.json());

// template engine
// app.engine(
//   "hbs",
//   expressHbs({
//     extname: "hbs",
//     defaultLayout: "main-layout",
//     layoutsDir: "views/layouts",
//   })
// );
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname + "/public"));

// Use Router
app.use(admimRouter);
app.use(shopRouter);

// router run when error
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { titleDoc: "Không tìm thấy trang" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Your app is running on http://localhost:${PORT}`);
});
