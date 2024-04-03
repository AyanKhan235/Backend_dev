const fs = require('fs');
const http= require('http')
const server=http.createServer();

server.on("request", (req,res)=>{
    //    1st way to read data but its not streaming
    // fs.readFile('stream.txt',  (err, data)=>{
    //     if(err) console.log(err);
    //     res.end(data)
    // })


     //    2st way to read data but its  streaming

    //  const rstream = fs.createReadStream("stream.txt");
    //  rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata)
    //  });
    //  rstream.on('end',()=>{
    //     res.end();
    //  });
    //  rstream.on('error',(err)=>{
    //    console.log(err);
    //    res.end("File Not Found");
    //  })

    // 3rd Way od Doing
      const rstream = fs.createReadStream("stream.txt");
      rstream.pipe(res);


});

server.listen(8000,"localhost");