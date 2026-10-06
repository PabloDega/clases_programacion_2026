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

export const crearProducto = async (descripcion, precio) => {
    console.log("--> servicio crearProducto en ejecucion");
    try {
        // grabar en BD
        const respuesta = await configDatabase.query(`INSERT INTO productos (descripcion, precio) VALUES ("${descripcion}", "${precio}")`);
        // devolver respuesta de BD
        return respuesta;
    } catch (error) {
        console.log("Error en servicio crearProducto", error.message);
        throw new Error("Error en servicio crearProducto")
    }
}