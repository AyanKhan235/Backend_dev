const add = (a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return b-a;
}
const name = "Ayan";
// module.exports=add;
// module.exports.name=name;
// module.exports.add=add;
// module.exports.sub=sub;

// module.exports.subtract =sub;
// but in the index need to destructure like {subtract}




module.exports={sub, add, name}


