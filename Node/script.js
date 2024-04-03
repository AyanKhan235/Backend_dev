// console.log(process.argv);

// let argv=process.argv;
// for(let i=0; i<argv.length;i++){
//     console.log("hello to",argv[i]);
// }


// let Math=require('./math')
// console.log(Math);
// console.log(Math.sum(2,3));


// one dir to another
let info=require('./fruits');
// console.log(info);
for(let i=0; i<info.length;i++){
    console.log(info[i].name, " " ,info[i].color );
}