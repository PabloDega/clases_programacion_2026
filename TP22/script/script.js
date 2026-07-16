console.log("ping fichas_personales");

document
.querySelector("#datos .btn")
.addEventListener("click", () => {
    // 1. Capturar elementos
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const dni = document.querySelector("#dni");
    
    // 2. Validar datos
    if(nombre.value == "" || apellido.value == "" || dni.value == ""){
        console.log("Completar todos los campos del formulario");
        mostrarError("Completar todos los campos del formulario");
        return;
    }

    // 3. Construir objeto
    const datosPersonales = {
        nombre: nombre.value,
        apellido: apellido.value,
        dni: dni.value
    }
    // 4. Guardar en array
    registros.push(datosPersonales);

    // 5. Limpiar vista
    nombre.value = "";
    apellido.value = "";
    dni.value = "";
    nombre.focus();

    // 6. Actualizar contador
    document.querySelector("#contador").textContent = registros.length;
})

function mostrarError(msg){
    // Mostrar el error en la vista
    const errorCont = document.querySelector(".error");
    errorCont.textContent = msg;
    errorCont.style.transform = "translateY(0)";
    setTimeout(() => {
        errorCont.style.transform = "translateY(100px)";
    }, 1000 * 7)
}

let registros = [];

document
.querySelector(".caja #btnMostrar")
.addEventListener("click", () => {
    document.querySelector("#salida").innerHTML = "";
    if(registros.length == 0){
        mostrarError("No hay registros para mostrar");
        return;
    }
    registros.forEach((datosPersonales) => {
        const vista = `
        <div class="card">
            <div>Nombre: ${datosPersonales.nombre}</div>
            <div>Apellido: ${datosPersonales.apellido}</div>
            <div>DNI: ${datosPersonales.dni}</div>
        </div>`;
        document
        .querySelector("#salida")
        .innerHTML += vista;
    })
})

document
.querySelector(".caja #btnVaciar")
.addEventListener("click", () => {
    // Capturar elementos
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const dni = document.querySelector("#dni");
    // vaciar inputs
    nombre.value = "";
    apellido.value = "";
    dni.value = "";
    nombre.focus();
    // reiniciar contador
    document.querySelector("#contador").textContent = 0;
    // vaciar salida
    document.querySelector("#salida").innerHTML = "";
    // vaciar arrays de datos
    registros = [];
})