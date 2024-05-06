const http = require('http');
const fs = require('fs');
const index = fs.readFileSync("index.html","utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = http.createServer((req,res)=>{
      if(req.url.startsWith('/product')){
             const id = req.url.split('/')[2];
             const product = products.find(p => p.id ==(+id));
             res.setHeader('Content-Type','text/html');         
              const modifiedindex = index.replace('**HELLO**', product.title)
            .replace('**PRICE**',product.price)
            .replace('**Rating**',product.rating)
            .replace('**Image**',product.thumbnail)  
         res.end(modifiedindex);
         return
      }
    console.log('req method',req.url)
    
    
})

server.listen(8080,()=>{
    console.log('server started');
})