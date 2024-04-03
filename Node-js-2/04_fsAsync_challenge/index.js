const fs=require('fs');

// fs.mkdir('Ayan',(err)=>{
//     console.log(Folder Created);
// })

// fs.writeFile('Ayan/bio.txt',"This is my bio file", (err)=>{
//     console.log(File created and data in the file);
// });
// fs.appendFile('Ayan/bio.txt'," I am a developer", (err) => {
//     console.log(append the data );
// })

// fs.readFile('Ayan/bio.txt','utf8',(err,data)=>{
//     console.log(reading the file);
// })

// fs.rename('Ayan/bio.txt','myBio.txt',(err)=>{
//     console.log(err);
// })
// fist delete file 
// fs.unlink('./Ayan/myBio.txt',(err)=>{
//     console.log(err);
//     console.log("deleted File");
// })
fs.rmdir('Ayan',(err)=>{
    console.log("delete folder");
})

