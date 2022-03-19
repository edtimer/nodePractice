const path = require("path");
const express = require("express");
const { products } = require("./data");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  console.log("works");
  //res.json has a call back that provides the passed json array of object
  //   res.json([
  //     { Name: "tester", Level: "alpha" },
  //     { Name: "Theo", Level: "gaga" },
  //   ]);
  res.json(products);
});

app.listen(port, () => {
  console.log(`server is now running on ${port}`);
});
