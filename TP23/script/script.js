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

function mostrarAlumnos(idCurso){}

//mostrarCursos();

window.onload = () => {
    mostrarCursos();
}