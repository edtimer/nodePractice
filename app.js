// //npm run dev to run with nodemon
// const { on } = require("events");
// const eventEmitter = require("events");

// //creating an instance of eventEmitter
// const customEmitter = new eventEmitter();

// //on(listen to event) , emit (emits an event)
// customEmitter.on("response", () => {
//   console.log("data received");
// }); //we passed a string which is our event name and the call back

// customEmitter.emit(`response`); //it needs to match (this one causes an emit that is detected by the previous on)
//server using event emitter
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("this was triggered by an event emitter");
});

server.listen(5000);
