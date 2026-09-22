import mysql from "mysql2/promise"

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 20,
});

export const query = async (sql) => {
    try {
        const resp = await pool.query(sql);
        //console.log(resp[0][0])
        return resp;
    } catch (error) {
        console.error("Error en la query" + error.message);
        throw new Error("Error en query a la BD");
    }
}