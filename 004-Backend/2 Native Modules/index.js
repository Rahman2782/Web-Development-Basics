const fs = require("fs"); //module for file system

// fs.writeFile("message.txt", "Testing node out", (err) => {
//     if (err) throw err;
//     console.log("The file is saved!!!");
// });

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});