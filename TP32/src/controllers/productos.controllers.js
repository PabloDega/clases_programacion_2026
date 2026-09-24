import * as serviciosPorductos from "../services/productos.services.js";

export const getProductos = async(req, res) => {
    console.log("--> getProductos en ejecucion");
    try {
        // Leer productos de la BD
        const productos = await serviciosPorductos.getProductos();
        // Crear vista para el cliente
        // Enviar vista en la respuesta
        return res.send(productos[0]);
    } catch (error) {
        console.log("Error en getProductos");
        console.log(error.message);
        res.status(503).send("Ups, ocurrio un error")
    }
    
}