const express = require("express");
const app = express();

const PORT = 4000;
app.use(express.urlencoded({
    extended: false
}))

app.get("/", (req, res) => {
    res.send(`<h1>Mi sitio web</h1>
        <a href="/formulario">Formulario</a>`)
})

app.get("/formulario", (req, res) => {
    res.send(`<form action="/formulario/api" method="post">
        <input type="text" name="nombre" placeholder="nombre....">
        <input type="text" name="apellido" placeholder="apellido...">
        <button type="submit">Enviar</button>
    </form>`)
})

app
.post("/formulario/api", (req, res) => {
    console.log("Post recibido");
    console.log(req.body);
    // Gestionar los datos recibidos
    res.send("<h2>Formulario recibido</h2><a href='/'>Volver</a>");
})

app.use((req, res, next) => {
    res.status(404).send("<h2>Pagina inexistente</h2>")
})

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
})