const path = require("path");
//this will be asynchronus
const { readFile, readFileSync, writeFile } = require("fs");
//async file read and write require a call back

//returns an absolute path
//it requests a sequence and resolves it to absolute path
const resolver = path.resolve(__dirname, "content", "subfolder", "test.txt");
// console.log(resolver);

//reading from content/subfolder (require 2 params a)path b)encoding
console.log(readFileSync(resolver, "utf-8"));
const textfile = readFileSync(resolver, "utf-8");

//the following will write to text file (asynchronus)
//second argument is a call back function
readFile("./content/writen.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Something went wrong");
    console.log(err);
    return;
  }
  //if everything isokay show me the result which is the text
  console.log(result);
});
