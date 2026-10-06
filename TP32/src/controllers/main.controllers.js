import * as configDatabase from "../config/database.js";
import * as vistasMain from "../views/main.views.js";

export const loginPost = async (req, res) => {
    try {
        console.log("--> loginPost en ejecucion");
        console.log(req.body);
        // leer datos de BD
        const usuarios = await configDatabase.query(`SELECT * FROM usuarios WHERE usuario = "${req.body.usuario}" AND eliminado = 0`);
        if(req.body.password.trim() == usuarios[0][0].contrasenia){
            req.session.user = {
                id: usuarios[0][0].id,
                usuario: usuarios[0][0].usuario,
            }
            console.log("Usuario logueado", req.session.user);
            res.redirect("/panel");
            return;
        } else {
            res.send("Error al loguear");
            return;
        }
    } catch (error){
        console.log("Error en loginPost");
        console.log(error.message);

        res.status(503).send("Ups, ocurrio un error")
    }
}

export const getDashboard = (req, res) => {
    try {
        console.log("--> getDashboard en ejecucion");
        // Crear la vista del panel
        const vista = vistasMain.mainDashboard(req.session.user);
        res.send(vista);
        return 
    } catch (error) {
        console.log("Error en getDashboard", error.message);
        res.status(503).send("Ups, ocurrio un error");
        return;
    }
}

export const logOut = (req, res) => {
    req.session.destroy((error) => {
        if(error){
            res.status(500).send("No se pudo cerrar la sesion");
            return;
        };
        res.clearCookie("connect.sid");
        res.redirect("login.html");
        return;
    });
}