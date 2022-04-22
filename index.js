const fs = require("fs");

// Blocking, synchronous way
const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about the avocado. ${textIn}.\ Created on ${Date.now()}`;
fs.writeFileSync("./starter/txt/output.txt", textOut);
console.log("file written");

// Non Blocking, asynchronous way
fs.readFile("./starter/txt/start.txt", "utf-8", (err, data) => {
  console.log(data, err);
});
