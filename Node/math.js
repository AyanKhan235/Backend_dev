let sum=(a,b)=> a+b;
let mul=(a,b)=> a*b;
let pi=3.1425;
let g=9.8;
module.exports.sum=(a,b)=> a+b;
module.exports.mul=(a,b)=> a*b;
module.exports.pi=3.1425;
module.exports.g=9.8;

exports.sum=(a,b)=> a+b;
exports.mul=(a,b)=> a*b;
exports.pi=3.1425;
exports.g=9.8;


// export = 5  wrong way to exports it treated as a varivale

// let obj={
//     sum:sum,
//     mul:mul,
//     pi:pi,
//     g:g
// }
// module.exports={
//     sum:sum,
//     mul:mul,
//     pi:pi,
//     g:g
// }

// module.exports=obj
