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
const { query } = require("express");
const express = require("express");
const path = require("path");
const app = express();
app.disable("x-powered-by");
const { products, people } = require("./data");
const Authorize = require("./navbar-app/Authorize");
console.log(__dirname);
app.use(express.static("./navbar-app/public")); //to get all the required resources for the page (can be to navbar-app or create a folder called public with all resources)

//logging function (middleware)
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(
    "method used: " +
      method +
      " " +
      url +
      " " +
      "access year is : " +
      time +
      "The user info is:" +
      req.user
  );
  //the next method must be added to return the flow to the method requesting the middleware
  next();
};

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "./navbar-app/index.html")); // send file is an express method
  //a better way to send html files
  //1.adding to static assets (index html is served by default)
  //2.Server side rendering(tempelate engine)
});
app.use([Authorize, logger]);

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
app.get("/api/people", (req, res) => {
  res.json(people);
  res.end;
});
app.get("/api/people/names", (req, res) => {
  const singleNames = people.map((eachPerson) => {
    const { name } = eachPerson;
    return { name };
  });
  res.json(singleNames);
});

app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  console.log(req.params);
  const singleItem = products.find(
    (product) => product.id === Number(productId)
  );
  res.json(singleItem);
});
app.get("api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  res.send(singleProduct);
});
//checking query parameters
// app.get("/api/v1/query", (req, res) => {
//   console.log(req.query); //this provides us with what was sent
//   res.status(403).end("Not allowed");
// });

//what comes after ? is a query what is in :xxx is a param
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;

  //usinglet because we will modify it
  let itemz = [...products];
  if (search) {
    //itemz cannot be const because we keep modifying it
    itemz = products.filter((prod) => {
      return prod.name.startsWith(search);
    });
  }
  if (limit) {
    itemz = itemz.slice(0, Number(limit));
  }
  res.status(200).json(itemz);
});
app.get("/api/middle/v1", (req, res) => {});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "navbar-app/alt.html"));
});

const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
