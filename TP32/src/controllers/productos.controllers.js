import * as serviciosPorductos from "../services/productos.services.js";
import * as vistasProductos from "../views/productos.views.js";

export const getProductos = async(req, res) => {
    console.log("--> getProductos en ejecucion");
    try {
        // Leer productos de la BD
        const productos = await serviciosPorductos.getProductos();
        // Crear vista para el cliente
        const vista = vistasProductos.vistaProductos(productos[0]);
        // Enviar vista en la respuesta
        return res.send(vista);
    } catch (error) {
        console.log("Error en getProductos");
        console.log(error.message);
        res.status(503).send("Ups, ocurrio un error")
    }
    
}

export const crearProducto = async (req, res) => {
    console.log("--> crearProducto en ejecucion");
    try {
        // crear vista
        const vista = vistasProductos.crearProducto()
        // enviar vista en respuesta
        res.send(vista);
        return;
    } catch (error) {
        console.log("Error en crearProducto", error.message);
        res.status(503).send("Ups, ocurrio un error")
        return;
    }
}