const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    fs.readFile("index.html", (error, datos) => {
        if(error){
            // devolver 400
            res.writeHead(400, {"Content-type": "text/html"});
            res.write("Archivo inaccesible")
            res.end();
        }
        res.writeHead(200, {"Content-type": "text/html"});
        res.write(datos);
        res.end();
        console.log(url.parse(req.url, true).query.sede)
    })
}).listen(4000);

console.log("Servidor activo en http://localhost:4000");