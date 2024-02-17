## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

let fs = require("fs");

const filePath ="./myFile.txt"

const content = fs.readFileSync(filePath, 'utf-8');
// // Remove extra spaces using a regular expression
const modifiedContent = content.replace(/\s+/g, ' ');

// // Write the modified content back to the same file
fs.writeFileSync(filePath, modifiedContent);

const d = fs.readFileSync(filePath, 'utf-8')
console.log(d)
