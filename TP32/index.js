import "dotenv/config";
import express from "express";
import { rutas } from "./src/routes/main.routes.js";
import { rutasProductos } from "./src/routes/productos.routes.js";
import session from "express-session";
import { rateLimit } from "express-rate-limit";

const app = express();

const limitador = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Demasiados intentos, vuelva mas tarde",
});

app.use(limitador);

app.use(express.static("public"));
app.use(express.urlencoded({
    extended: false,
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 15 * 24 * 60 * 60 * 1000,
    }
}));

app.use("/", rutas);
app.use("/", rutasProductos);

app.use((req, res) => {
    res.send("404 Pagina inexistente");
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en http://localhost:${process.env.PORT}`)
})