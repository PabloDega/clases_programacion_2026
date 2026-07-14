console.log("ping de script_01.js");

const curso = {
    titulo: "Programacion Web",
    sede: "San Martín",
    año: 2026,
    inscriptos: 26,
    saludar: () => {
        console.log("Hola alumnos de " + curso.titulo);
    }
}

// acceder a propiedades
console.log(curso.sede);
console.log(curso["año"]);

// modificar propiedades
curso.sede = "San Miguel";

// Agregar una propiedad
curso.turno = "noche";

// Eliminar propiedad
delete curso.año

console.log(curso);
console.clear();

// Iteracion
for(const dato in curso){
    console.log(dato); // lee la clave (key)
    console.log(curso[dato]); // lee valor
}

console.clear();

// Metodos
curso.saludar();