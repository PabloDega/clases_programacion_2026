import express from "express";
export const rutas = express.Router();
import * as controllersMain from "../controllers/main.controllers.js";
import * as middlewaresMain from "../middlewares/main.middlewares.js";

rutas.post("/login", middlewaresMain.validarLogin, controllersMain.loginPost);