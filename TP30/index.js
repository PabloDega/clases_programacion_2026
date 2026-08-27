const express = require("express");
const app = express();
const PORT = 4000;
const fs = require("fs");

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

/* app.get("/", (req, res) => {
    res.send("<h1>Mi sitio con express</h1>");
}); */

app.post("/formularios", (req, res) => {
    console.log("Post recibido en /formularios");
    console.log(req.body);

    let datos = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono
    }
    datos = JSON.stringify(datos);
    datos += ",";

    fs.appendFile("./datos/datos.json", datos, (error) => {
        console.log(error);
        return;
    })

    res.send("<h2>Datos recibidos</h2><a href='/'>Volver</a>");
})

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});