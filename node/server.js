const http= require('http');
const fs=require('fs');

const server= http.createServer((req,res)=>{
  if(req.url === '/'){
    fs.readFile('./home.html',(err,data)=>{
        if(err){
            res.writeHead(500,{
                'content-type':'text/plain' });
            res.end('internal Server error');
        }
        else{
            res.writeHead(200,{'content-type':'text/html'});
            res.end(data);
        }
        
    }
  
)

}
else if(req.url==='/about'){
    fs.readFile('./about.html',
        (err,data)=>{
            if(err){
                res.writeHead(500,{
                    'content-type':'text/plain' });
                res.end(`internal Server error1 ${err}`);
            }
            else{
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data);
            }
        }
    )
}
else if(req.url==='/404'){
    fs.readFile('./404.html',
        (err,data)=>{
            if(err){
                res.writeHead(500,{'content-type':'text/plain'});
                res.end(`Internal Server Error ${err}`)
            }
            else{
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data);
            }

        }
    )
   
}
    


}
);

server.listen(5000, () =>{
    console.log(`Server is running at http://localhost:5000`);
})