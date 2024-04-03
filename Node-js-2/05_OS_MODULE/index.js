const os = require('os');

console.log(os.arch());

const freememory= os.freemem();
console.log(`${freememory/1024/1024/1024} Gb`);  //

const Totalmemory= os.totalmem();
console.log(`${Totalmemory/1024/1024/1024} Gb`);  //


console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
console.log(os.tmpdir());

