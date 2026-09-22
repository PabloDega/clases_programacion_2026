export const validarLogin = async(req, res, next) => {
    console.log("--> Middleware de validacion de login en ejecucion");
    let validacion = true;
    // Validamos
    const usuario = req.body.usuario.trim();
    const password = req.body.password.trim();
    if(usuario === "" || password === ""){
        validacion = false;
    }
    // Si sale mal
    if(validacion === false){
        console.log("--> Error al validar login");
        res.status(400).send("Error al validar datos");
        return;
    }
    // Si esta ok
    console.log("--> Validacion de login exitosa");
    next();
}