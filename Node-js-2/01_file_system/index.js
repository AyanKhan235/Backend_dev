const fs = require("fs");
//  name file if exist then add data otherwise create and add data;
fs.writeFileSync('read.txt',"welcome to node js series");
//  if already file exist-->override the data in exist file
fs.writeFileSync('read.txt',"ayan  this is  node js new  series");
//  add data more in fs file
fs.appendFileSync("read.txt"," this is one more data to be added in txt file")
//  read data  from file index.js to read.txt dairect

const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);


//node js includes an additional data type called buffer
// [not available in browsers javascript]
// buffer is mainly use to store binary data
// while reading from file or receiving packets over the network 
// output 
/* <Buffer 61 79 61 6e 20 20 74 68 69 73 20 69 73 20 20 6e 6f 64 65 20 6a 73 20 6e 65 77 20 20 73 65 72 69 65 73 20 74 68 69 73 20 69 73 20 6f 6e 65 20 6d 6f 72 ... 30 more bytes> */

//  its give file original data
const original_data=buf_data.toString();
// console.log(original_data);


// to remane the file

fs.renameSync('read.txt','readwrite.txt');