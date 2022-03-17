const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("this was triggered by an event emitter");
});
const port = 5000;
server.listen(port, () => {
  console.log(`listening on port ${port} `);
});
