// console.log("Express Tutorial");
// const { readFileSync } = require("fs");
// const http = require("http");
// //get all files
// const homePage = readFileSync("./index.html");
// const server = http.createServer((req, res) => {
//   res.writeHead(401, { "content-type": "text-html" });
//   console.log(req.url);
//   if (req.url !== "/test") {
//     //changin to "content-type": "text-plain" would print the litteral html
//     res.writeHead(404, { "content-type": "text-html" });
//     res.end("Not found");
//   } else {
//     console.log("the user has hit the server");
//     res.write("<h1>Welcome to home page</h1>");
//     res.write(homePage);
//     res.end("stuff here");
//   }
// });
const express = require("express");
const path = require("path");
const app = express();
const { products, people } = require("./data");
console.log(__dirname);
app.use(express.static("./navbar-app/public")); //to get all the required resources for the page (can be to navbar-app or create a folder called public with all resources)
app.get("/", (req, res) => {
  console.log("home page");

  // res.sendFile(path.resolve(__dirname, "./navbar-app/index.html")); // send file is an express method
  //a better way to send html files
  //1.adding to static assets (index html is served by default)
  //2.Server side rendering(tempelate engine)
  res.sendFile(path.resolve(__dirname, "navbar-app/alt.html"));
});

app.get("/api/products", (req, res) => {
  console.log("/api/products sending all products");
  res.status(200).json(products);
});
//using the map function to limit what we retrieve
app.get("/api/product", (req, res) => {
  const singleProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(singleProduct);
});
const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
