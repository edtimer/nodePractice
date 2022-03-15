console.log("Express Tutorial");
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(401, { "content-type": "text-html" });
  console.log(req.url);
  if (req.url !== "/test") {
    res.writeHead(404, { "content-type": "text-html" });
    res.end("Not found");
  } else {
    console.log("the user has hit the server");
    res.write("<h1>Welcome to home page</h1>");
    res.end("stuff here");
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`listening on port ${port} `);
});
