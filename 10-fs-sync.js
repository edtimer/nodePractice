const path = require("path");
const { readFileSync, writeFileSync } = require("fs");

//returns an absolute path
//it requests a sequence and resolves it to absolute path
const resolver = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(resolver);

//reading from content/subfolder (require 2 params a)path b)encoding
console.log(readFileSync(resolver, "utf-8"));
const textfile = readFileSync(resolver, "utf-8");
//the following will write to text file
//the a flag specifies it will append , default is overwrite
writeFileSync("./content/writen.txt", `this is inside the file: ${textfile}`, {
  flag: "a",
});
