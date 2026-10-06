import "dotenv/config";
import express from "express";
import { rutas } from "./src/routes/main.routes.js";
import { rutasProductos } from "./src/routes/productos.routes.js";
import session from "express-session"

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: false,
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use("/", rutas);
app.use("/", rutasProductos);

app.use((req, res) => {
    res.send("404 Pagina inexistente");
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en http://localhost:${process.env.PORT}`)
})