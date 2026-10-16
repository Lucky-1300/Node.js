const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("Welcome to my node.js server");
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});