const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url)
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
    else{
        res.writeHead(404, {"Content-type":"text/html"});
        res.end("<h1>404 error ! pages</h1>");
    }
})

server.listen(8000,"127.0.0.1", ()=>{
   
    console.log("server is listening on the port of 8000");
});