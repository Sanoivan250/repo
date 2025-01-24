const http = require('http');
const fs = require('fs');

const server = http.createServer((req,resp)=>{

    if(req.url==='/'){
       fs.readFile('./view/home.html',(err,data)=>{
        if(err){
            resp.writeHead(500,{'Content-Type':'text/plain'})
            resp.end(`Internal server err:${err}`);
        }
        else{
            resp.writeHead(200,{'Content-Type':'text/html'})
            resp.end(data)
        }
       }) 
    }
    else if(req.url==='/about'){
     fs.readFile('./view/about.html',(err,data)=>{
        if(err){
            resp.writeHead(500,{'content-Type':'text/plain'})
        resp.end(`Internal Server Erro: ${err}`)
        }
        else{
            resp.writeHead(200,{'Content-Type':'text/html'})
            resp.end(data)
        }
     })
    }
    else{
       fs.readFile('./view/404.html',(err,data)=>{
        if(err){
            resp.writeHead(404,{'Content-Type':'text/plain'})
            resp.end('404 page not found')
        }
        else{
            resp.writeHead(200,{'Content-Type':'text/html'})
             resp.end(data)  
        }
       })
    }
})

server.listen(3000,console.log("....Im listenning on port 3000"));  