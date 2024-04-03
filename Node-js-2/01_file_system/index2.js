const fs = require('fs');

fs.writeFileSync("read.txt","this is our practice file ");
fs.writeFileSync("read.txt","this is out practise file and learn about file");
fs.appendFileSync("read.txt", " node series learning proper");

const buf_data=fs.readFileSync("read.txt");
// console.log(buf_data);
const str_data=buf_data.toString();
console.log(str_data);

fs.renameSync("read.txt","reading.txt");

