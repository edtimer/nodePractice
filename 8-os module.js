const os = require("os"); //this one is a built in module so doesnt require ./

// info about the current user
const user = os.userInfo();
console.log(user);

//get system uptime in seconds

const uptime = os.uptime();
console.log(`${uptime / 60} minutes which is ${uptime / 60 / 60} hours`);

//os info
//creating an object with some properties
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
