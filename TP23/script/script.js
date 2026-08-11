function mostrarCursos(){
    cursos.forEach((curso) => {
        const html = `<div class="card curso">
            <h1>${curso.nombre}</h1>
            <span>Alumnos: ${curso.alumnos.length}</span>
            <span>${curso.iniciado ? "Curso iniciado" : "Curso cerrado"}</span>
            <div class="btn" data-curso=${curso.id}>Ver detalles</div>
        </div>`;
        document.querySelector("#cursos").innerHTML += html;
    });
    // dar evento a btns
    document
    .querySelectorAll("#cursos .btn")
    .forEach((btn) => {
        btn.addEventListener("click", (e) => {
            console.log("click en boton de curso: " + e.target.dataset.curso);
            mostrarAlumnos(e.target.dataset.curso);
        })
    })
}

function mostrarAlumnos(idCurso){
    document.querySelector("#detalles").style.display = "flex";
    const cursoActual = cursos.find(curso => curso.id == idCurso);
    //console.log(cursoActual);
    document.querySelector("#detalles > h1").textContent = `Detalles del curso ${cursoActual.nombre}`;
    document.querySelector("#detalles > span").textContent = `Cantida de alumnos: ${cursoActual.alumnos.length}`;
    // Crear tarjetas de alumnos
    let htmlCardsAlumnos = "";
    cursoActual.alumnos.forEach((idAlumno) => {
        const alumnoActual = alumnos.find(alumno => alumno.id == idAlumno);
        htmlCardsAlumnos += `<div class="card alumno">
            <span>Nombre: ${alumnoActual.nombre}</span>
            <span>Apellido: ${alumnoActual.apellido}</span>
            <span>DNI: ${alumnoActual.dni}</span>
            <span>Localidad: ${alumnoActual.localidad}</span>
        </div>`;
    });
    document.querySelector("#listaAlumnos").innerHTML = htmlCardsAlumnos;
}

//mostrarCursos();

window.onload = () => {
    mostrarCursos();
}