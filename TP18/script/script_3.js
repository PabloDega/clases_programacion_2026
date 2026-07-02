console.log("ping script_3");

document
.querySelector("form")
.addEventListener("submit", (e) => {
    //console.log("Formulario enviado");
    e.preventDefault();
    const validacion = validarForm();
    if(validacion){
        console.log("Formulario validado");
        document.querySelector("body").style.backgroundColor = "darkcyan";
        // enviar formulario e.target.submit()
    } else {
        console.log("Formulario invalido");
        document.querySelector("body").style.backgroundColor = "darkred";
    }
});

function validarForm(){
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const dni = document.querySelector("#dni");
    const respuesta = document.querySelector("#respuesta div");

    if(nombre.value == "" || apellido.value == "" || dni.value == ""){
        console.log("Completar todos los campos");
        respuesta.textContent = "Completar todos los campos";
        return false;
    }
    //console.log(isNaN(parseInt(dni.value)));
    if(isNaN(parseInt(dni.value)) || dni.value.length !== 8){
        console.log("El campo DNI solo acepta numeros de 8 digitos");
        respuesta.textContent = "El campo DNI solo acepta numeros de 8 digitos";
        return false;
    }

    let validarNombre = true;

    const letrasAprobadas = "abcdefghijklmnñopqrstuvwxyzáéíóúäëïöü ".split("");

    nombre.value
    .split("").forEach((letra) => {
        //console.log(letra.toLowerCase());
        const consulta = letrasAprobadas.indexOf(letra.toLowerCase());
        //console.log(consulta);
        if(consulta === -1){
            console.log("Nombre y apellido solo acepta letras");
            validarNombre = false;
        }
    });

    if(!validarNombre){
        respuesta.textContent = "Nombre y apellido solo acepta letras";
        return false;
    }

    respuesta.textContent = "Formulario validado con exito";
    return true;
}