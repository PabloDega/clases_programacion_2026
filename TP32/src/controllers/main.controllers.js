export const loginPost = async (req, res) => {
    try {
        console.log("--> loginPost en ejecucion");
        console.log(req.body);
        // leer datos de BD
        const usuarios = [{
            usuario: "pablo",
            password: "password123"
        }];
        if(req.body.password.trim() === usuarios[0].password){
            res.send("Login exitoso");
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