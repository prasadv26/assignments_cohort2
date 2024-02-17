## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

let fs = require("fs");

fs.writeFile("./myFile.txt", "Write this in file", (err) => {
if (err) return err;
});

fs.readFile("./myFile.txt", (err, data) => {
if (err) return err;
console.log("reading from file : ", data.toString());
});
