const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("this was triggered by an event emitter");
});

server.listen(5000);
