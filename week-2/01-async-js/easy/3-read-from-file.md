## Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

let fs = require("fs");
let initialTime = new Date();
console.log("before reading");
fs.readFile("./myFile.txt", (err, data) => {
if (err) return console.log(err);
console.log(data.toString());
console.log("read time : ",new Date - initialTime)
});
let sum = 0;
for(let i=0;i<1000000000;i++){
sum+=i;
}
console.log(sum);
console.log("expensive ops time : ", new Date - initialTime)
console.log("after reading");
