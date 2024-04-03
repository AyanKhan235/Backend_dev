const EventEmitter= require('events');

const event = new EventEmitter();
// by one event we canc call or emit multiple event or fun

// event.on("sayMyName",()=>{
//     console.log("my name is Ayan");
// })
// event.on("sayMyName",()=>{
//     console.log("my name is Khan");
// })
// event.on("sayMyName",()=>{
//     console.log("my name is Pathan");
// })


// check page
event.on("checkpage", (sc, msg)=>{
console.log(`status code is ${sc} and message is ${msg}`);
})
event.emit("checkpage",200,"ok");