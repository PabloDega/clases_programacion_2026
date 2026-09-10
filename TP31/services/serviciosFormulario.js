const fs = require("fs");

const guardarFormulario = async (datos) => {
    fs.appendFile("./data/datos.json", JSON.stringify(datos), (err) => {
        return {
            error: true,
            msg: "error al grabar archivo"
        }
    })
    return {error: false}
}

module.exports = {
    guardarFormulario,
}