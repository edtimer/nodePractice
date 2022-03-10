const { readFile, writeFile } = require("fs").promises;

// const getText = (path) => {
//   //return a promise with a call back function in it
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
//async function
// const start = async () => {
//   try {
//     const first = await getText("./content/writen.txt");
//     const second = await getText("./content/secondwritten.txt");
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };
const start = async () => {
  try {
    const first = await readFile("./content/writen.txt", "utf-8");
    const second = await readFile("./content/secondwritten.txt", "utf-8");
    await writeFile("./content/secondwritten.txt", `this works!: ${first} `, {
      flag: `a`,
    });
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

// getText("./content/writen.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
