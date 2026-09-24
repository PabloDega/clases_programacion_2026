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