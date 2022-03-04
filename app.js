const http = require("http");
const { reset } = require("nodemon");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  }
  if (req.url === "/about") {
    //blocking code!!!
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About page");
  } else {
    res.end("Error page");
  }
});
const port = 5000;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
