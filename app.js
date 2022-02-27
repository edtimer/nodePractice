const http = require("http");

const server = http.createServer((req, res) => {
  res.write("initializeing server");
  res.sendDate();
  res.end;
});
server.listen(5000);
