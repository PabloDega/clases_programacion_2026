document
.querySelector("#btnAgregar")
.addEventListener("click", () => {
    // 1 Leer el input de tarea
    const tareaNueva = document.querySelector("#cont > div > input").value;
    // 2 validar info leida
    if(tareaNueva === ""){return}
    // 3 Crear objeto con dato del input
    const objTareaNueva = {
        nombre: tareaNueva,
        estado: "Pendiente",
        eliminado: false
    }
    // 4 Leer LS
    let tareasPrevias = localStorage.getItem("tareas");
    // 5 Actualizar info anterior con obj nuevo, o crear nuevo objeto
    if(tareasPrevias === null){
        // 6 Guardar en LS
        localStorage.setItem("tareas", JSON.stringify([objTareaNueva]));
    } else {
        // 6.b Guardar en LS (update)
        tareasPrevias = JSON.parse(tareasPrevias);
        tareasPrevias.push(objTareaNueva);
        localStorage.setItem("tareas", JSON.stringify(tareasPrevias));
    }
    // 7 Vaciar campos
    document.querySelector("#cont > div > input").value = "";
    // 8 Actualizar tabla
    crearVistaTabla();
})

function crearVistaTabla(){
    let tareas = localStorage.getItem("tareas");
    if(tareas === null){return}
    tareas = JSON.parse(tareas);
    let salidaHTML = "";
    tareas.forEach((tarea, i) => {
        salidaHTML += `<tr>
          <td>${tarea.nombre}</td>
          <td><span class="estado ${tarea.estado}}">${tarea.estado}</span></td>
          <td>
            <div class="btn" id="btnEditar" data-index="${i}">Editar</div>
            <div class="btn" id="btnEliminar" data-index="${i}">Eliminar</div>
          </td>
        </tr>`;
    });
    document
    .querySelector("table tbody")
    .innerHTML = salidaHTML;
}

crearVistaTabla();