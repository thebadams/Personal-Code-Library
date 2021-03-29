//require file system module for node
const fs = require("fs");
//create index.html
fs.writeFileSync('./index.html', "!");

//create directory structures
fs.mkdirSync("./assets");
fs.mkdirSync("./assets/js");
fs.mkdirSync("./assets/css");

// create assets files
fs.writeFileSync("./assets/js/script.js", "");
fs.writeFileSync("./assets/css/styles.css", "");