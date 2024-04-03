const path = require('path');

console.log(path.dirname(" C:/Users/amaan/Desktop/MERN/Backend_dev/Node-js-2/06_Path_module/index.js "));
console.log(path.extname(" C:/Users/amaan/Desktop/MERN/Backend_dev/Node-js-2/06_Path_module/index.js "));
console.log(path.basename(" C:/Users/amaan/Desktop/MERN/Backend_dev/Node-js-2/06_Path_module/index.js "));
// all in  one 
console.log(path.parse(" C:/Users/amaan/Desktop/MERN/Backend_dev/Node-js-2/06_Path_module/index.js "));
const objPath=path.parse(" C:/Users/amaan/Desktop/MERN/Backend_dev/Node-js-2/06_Path_module/index.js ");
console.log(objPath.name);
console.log(objPath.ext);
console.log(objPath.root);



