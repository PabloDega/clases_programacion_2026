import * as serviciosProductos from "../services/productos.services.js";
import * as vistasProductos from "../views/productos.views.js";

export const getProductos = async(req, res) => {
    console.log("--> getProductos en ejecucion");
    try {
        // Leer productos de la BD
        const productos = await serviciosProductos.getProductos();
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

export const crearProductoPost = async (req, res) => {
    console.log("--> crearProductosPost en ejecucion");
    try {
        // leer datos del post
        const descripcion = req.body.descripcion;
        const precio = req.body.precio;
        // validar datos del post
        if(descripcion.trim() === "" 
        || precio.trim() === "" 
        || isNaN(parseFloat(precio))){
            res.send("Completar todos los campos requeridos");
            return;
        }
        // grabar datos en BD
        const respuesta = await serviciosProductos.crearProducto(descripcion, precio);
        // capturar error
        // redirigir usuario a vista de productos
        res.redirect("/productos");
        return;
    } catch (error) {
        console.log("Error en crearProductosPost", error.message);
        res.status(503), send("Ups, ocurrio un error");
        return;
    }
}

export const editarProducto = async (req, res) => {
    console.log("--> editarProducto en ejecucion");
    console.log(req.params.id);
    try {
        const id = parseInt(req.params.id);
        if(isNaN(id) || id < 0){
            res.status(400).send("Id invalido");
            return;
        }
        const producto = await serviciosProductos.getProductoId(id);
    } catch (error) {
        console.log("Error en crearProductosPost", error.message);
        res.status(503), send("Ups, ocurrio un error");
        return;
    }
}

export const editarProductoPost = async (req, res) => {
    console.log("--> editarProductoPost en ejecucion");
    console.log(req.params.id);
    try {
        const id = parseInt(req.params.id);
        if(isNaN(id) || id < 0){
            res.status(400).send("Id invalido");
            return;
        }
    } catch (error) {
        console.log("Error en crearProductosPost", error.message);
        res.status(503), send("Ups, ocurrio un error");
        return;
    }
}