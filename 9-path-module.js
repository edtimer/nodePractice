const path = require("path");

console.log(path.sep); // to get the seperator used in the system

//joiner to join paths and return a normalized resultant path
//combining the folders to get a complete path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//to get the base name which is the *last portion* in path
const base = path.basename(filePath);
console.log(base);

//returns an absolute path
//it requests a sequence and resolves it to absolute path
const resolver = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(resolver);
