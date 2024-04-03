const http = require('http');
const fs= require('fs');
const server = http.createServer((req,res)=>{

    const data=fs.readFileSync("./userApi.json","utf8");
    const myobj=JSON.parse(data);

    
    if(req.url == "/"){

        res.end('hello from the other side');
    }
    else if(req.url == "/about"){
        res.end('hello from the About side');
    }
    else if(req.url == "/contact"){
        res.end('<h1>hello from the contact side</h1>');
    }
    else if(req.url == "/blog"){
        res.end('hello from the blog side');
    }
    else if(req.url == "/userApi"){

        res.writeHead(200,{"content-type":"application/json"});
        res.end(myobj[0].name);
    }
    else{
        res.writeHead(404, {"Content-type":"text/html"});
        res.end("<h1>404 error ! pages</h1>");
    }
})

server.listen(8000,"127.0.0.1", ()=>{
   
    console.log("server is listening on the port of 8000");
});