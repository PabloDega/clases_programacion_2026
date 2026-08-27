const http = require("http");
const PORT = 4000;

http
.createServer((req, res) => {
    console.log(req.url);
    /* res.writeHead(200, {"content-type": "text/html"});
    res.write("<h1>Home</h1><div>Mi servidor</div>");
    res.end(); */
    if(req.url === "/"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>Home</h1><div>Mi servidor</div>");
        res.end();
        return;
    }
    if(req.url === "/cursos"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>Cursos</h1><div>Mi servidor</div>");
        res.end();
        return;
    }
    if(req.url === "/sedes"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>Sedes</h1><div>Mi servidor</div>");
        res.end();
        return;
    }
    res.writeHead(404, {"content-type": "text/html"});
    res.write("<h1>404</h1><div>Esta direccion no existe</div><a href='/'>Volver</a>");
    res.end();
})
.listen(PORT)

console.log(`🚀Servidor activo en http://localhost:${PORT}`);
console.log(`🕒Uptime: ${new Date().toLocaleString("es-AR")}`);