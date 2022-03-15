console.log("Express Tutorial");
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(401, { "content-type": "text-html" });
  console.log("the user has hit the server");
  res.write("<h1>Welcome to home page</h1>");
  res.end("Home pagels");
});

const port = 5000;
server.listen(port, () => {
  console.log(`listening on port ${port} `);
});
