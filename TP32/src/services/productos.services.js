import * as configDatabase from "../config/database.js"

export const getProductos = async () => {
    try {
        const productos = await configDatabase.query(`SELECT * FROM productos WHERE eliminado = 0`);
        return productos;
    } catch (error) {
        console.error("Error en la query" + error.message);
        throw new Error("Error en query a la BD");
    }
}

export const getProductosTodos = async () => {
    try {
        const productos = await configDatabase.query(`SELECT * FROM productos`);
        return productos;
    } catch (error) {
        console.error("Error en la query" + error.message);
        throw new Error("Error en query a la BD");
    }
}

export const crearProducto = async (descripcion, precio) => {
    console.log("--> servicio crearProducto en ejecucion");
    try {
        // grabar en BD
        const respuesta = await configDatabase.query(`INSERT INTO productos (descripcion, precio) VALUES ("${descripcion}", "${precio}")`);
        // devolver respuesta de BD
        return respuesta;
    } catch (error) {
        console.error("Error en servicio crearProducto", error.message);
        throw new Error("Error en servicio crearProducto")
    }
}

export const getProductoId = async (id) => {
    console.log("--> servicio get Producto Id en ejecucion");
    try {
        const producto = await configDatabase.query(`SELECT * FROM productos WHERE id = ${id}`);
        console.log(producto[0][0]);
        return producto[0][0];
    } catch (error) {
        console.error("Error en servicio crearProducto", error.message);
        throw new Error("Error en servicio crearProducto")
    }
}

export const updateProducto = async (id, body) => {
    console.log("--> servicio update Producto en ejecucion");
    try {
        const respuesta = await configDatabase.query(`UPDATE productos SET descripcion = "${body.descripcion}", precio = "${body.precio}", eliminado = "${body.eliminado}" WHERE id = ${id}`);
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.error("Error en servicio updateProducto", error.message);
        throw new Error("Error en servicio updateProducto");
    }
}

export const deleteProducto = async(id) => {
    console.log("--> servicio deleteProducto en ejecucion");
    try {
        const respuesta = await configDatabase
        .query(`UPDATE productos SET eliminado = 1 WHERE id = ${id}`);
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.error("Error en servicio eliminarProducto", error.message);
        throw new Error("Error en servicio eliminarProducto");
    }
}