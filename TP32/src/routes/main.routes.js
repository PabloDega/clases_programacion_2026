import express from "express";
export const rutas = express.Router();
import * as controllersMain from "../controllers/main.controllers.js";
import * as middlewaresMain from "../middlewares/main.middlewares.js";
import * as controllersProductos from "../controllers/productos.controllers.js";

rutas.post("/login", middlewaresMain.validarLogin, controllersMain.loginPost);

rutas.get("/productos", controllersProductos.getProductos)