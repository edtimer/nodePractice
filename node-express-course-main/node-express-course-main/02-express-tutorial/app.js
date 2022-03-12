console.log("Express Tutorial");
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("the user has hit the server");
  res.end("Home pagels");
});

const port = 5000;
server.listen(port, () => {
  console.log(`listening on port ${port} `);
});
