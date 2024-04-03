const fs = require('fs');
let obj={
    name:"AYAN",
    age:21,
    language:"NODE JS"
}
// 1 convert to json
// 2 add in another file
// 3 readfile
// 4 again convert in obj 
// 5 log


const jsondata=JSON.stringify(obj);
fs.writeFile('json1.json',jsondata,(err)=>{
// console.log(err);
})
fs.readFile('json1.json', "utf8", (err, data)=>{
    const orgdata=JSON.parse(data);
   console.log(orgdata);
})
// console.log(data);