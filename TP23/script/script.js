function mostrarCursos(){
    cursos.forEach((curso) => {
        const html = `<div class="card curso">
            <h1>${curso.nombre}</h1>
            <span>Alumnos: ${curso.alumnos.length}</span>
            <span>${curso.iniciado ? "Curso iniciado" : "Curso cerrado"}</span>
            <div class="btn" data-curso=${curso.id}>Ver detalles</div>
        </div>`;
        document.querySelector("#cursos").innerHTML += html;
    })
}

function mostrarAlumnos(){}

//mostrarCursos();

mostrarCursos();