import express from "express";
export const rutasProductos = express.Router();
import * as middlewaresMain from "../middlewares/main.middlewares.js";
import * as controllersProductos from "../controllers/productos.controllers.js";
import { rateLimit } from "express-rate-limit"

rutasProductos.get("/productos/crear", middlewaresMain.verificarLogin, controllersProductos.crearProducto);

rutasProductos.post("/productos/crear", middlewaresMain.verificarLogin, controllersProductos.crearProductoPost);

rutasProductos.get("/productos/editar/:id", middlewaresMain.verificarLogin, controllersProductos.editarProducto);

rutasProductos.post("/productos/editar/:id", middlewaresMain.verificarLogin, controllersProductos.editarProductoPost);

rutasProductos.get("/productos/eliminar/:id", middlewaresMain.verificarLogin, controllersProductos.eliminarProducto);

rutasProductos.get("/productos/lista", middlewaresMain.verificarLogin, controllersProductos.listaProductos);

const limitadorPedidos = rateLimit({
    windowMs: 5 * 60 * 1000, //5 minutos
    limit: 3,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        ok: false,
        mensaje: "Demasiados intentos de envio, intente mas tarde"
    }
})

rutasProductos.post("/productos/pedido/api", limitadorPedidos, middlewaresMain.validarPedido, controllersProductos.postPedidos)