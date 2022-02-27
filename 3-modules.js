//Modules
//to receive names we need to use require
const names = require(`./4-names`);

const sayHi = require("./5-utils");

//the following would print all names
// console.log(names);
// const data = require("./6-alternative-flavour");
sayHi("Leo");
sayHi(names.john);
sayHi(names.peter);
// sayHi(data.singlePerson.name);
// sayHi(data.items[0]);
