const biodata={
    name:"Ayan",
    age:21,
    college: "Techno India Njr INstitute of technology"

}

// obj to json 
const jsondata=JSON.stringify(biodata);
console.log(jsondata);

// json to obj
const objdata=JSON.parse(jsondata);
console.log(objdata);