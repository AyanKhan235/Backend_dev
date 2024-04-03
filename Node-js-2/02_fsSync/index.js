const fs=require('fs');
// creating folder
// fs.mkdirSync("Ayan");
//  put  data into ayan

// fs.writeFileSync("Ayan/bio.txt","my name is ayan khan");
// add more data
// fs.appendFileSync("Ayan/bio.txt"," and i am learning node");
// read without buffer data
// const data=fs.readFileSync('Ayan/bio.txt', 'utf8');
// console.log(data);

// fs.renameSync('Ayan/bio.txt','mybio.txt');


// FIRST DELETE FILE AND THEN FOLDER
// delete file
// fs.unlinkSync('Ayan/mybio.txt');

// delete folder
fs.rmdirSync("Ayan");
