const express = require("express");
const app = express();
// console.dir(app);
let port= 8080;
// listern is compolsary to listen all the time request jab bhi koi request bhejega ye sun lega 
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})

app.get("/:username/:id", (req,res)=>{
    // res.send("You Contacted root path"); 
    // path parameter
    let {username , id}= req.params;
    let htmlstr=`<h1>welcome to @${username}</h1>`
    res.send(htmlstr)
    console.log(req.params);


})
app.get("/search", (req,res)=>{
    // Query 
    // res.send("You Contacted search path"); 

})
// app.get("/contact", (req,res)=>{
//     res.send("You Contacted contact path"); 
// })
// app.get("*", (req,res) => {
//     // this will execute when any other route will
//     // be hit by user
//    res.send("This path is not exist")
// })

// app.post("/", (req,res)=>{
//     res.send("You send a Post request"); 
// })

// app.use listen all the request which comes at this server and if any middleware function return next() then only it will go for// static files are those which don't need
// get and use both cannot  use only one response will be send for same path
// app.use((req,res)=>{
//     // console.log(req);
//     console.log("Request Recieved");
//     let code="<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
//     res.send(code)
// })



