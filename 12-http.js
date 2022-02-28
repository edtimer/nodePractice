const http = require("http");
//the following creates a web server, requries a call back with two params
const server = http.createServer((req, res) => {
  //specifying url
  if (req.url === "/") {
    res.write("initializeing server");
    res.write("something else");
    console.log(res.getHeaderNames());
    res.end("worksssss");
  } else if (req.url === "/about") {
    res.write("in the about page");
    res.end();
  } else {
    res.end(`
  <h1 style='text-align:center;color:red'>Error cant find page</h1>
  <br>
  <a style='
  color: red;
  background-color: transparent;
  text-decoration: none;text-align:center;' href="/">Go back</a>`);
  }
});
//specify the port
server.listen(5000);
