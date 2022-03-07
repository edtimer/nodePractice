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
//async function
const start = async () => {
  try {
    const first = await getText("./content/writen.txt");
    const second = await getText("./content/secondwritten.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

// getText("./content/writen.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
