const { readFile, writeFile } = require("fs");

const getText = (path) => {
  //return a promise with a call back function in it
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./content/writen.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
