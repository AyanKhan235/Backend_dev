const fs=require('fs');
// fs.writeFile("read.txt","this is awesome Async", (err)=>{
//     console.log("Completed");
//     console.log(err);
// })
// fs.appendFile("read.txt"," need to learn node module of Async" ,(err)=>{
//     console.log("task done");
//     console.log(err);
// })

// fs.readFile('read.txt','utf8',(err,data)=> {
//     console.log(data);
// })


// Sysnc Asycn
const data=fs.readFileSync("read.txt", "utf8");
console.log(data);
console.log("After exucution");


// Aysnc  way 
fs.readFile('read.txt','utf8',(err,data)=>{
    console.log(data);
})
console.log("before execution");

