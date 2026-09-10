const validarFormulario = async (datos) => {
    if(datos.nombre === "" || datos.apellido === ""){
        return {
            error: true,
            msg: "Campos incompletos"
        }
    }
    return {error:false}
}

module.exports = {
    validarFormulario,
}