let miVariable = 123;
console.log(miVariable);

miVariable = 456;
console.log(miVariable);

const nombre = "Pablo";
console.log(nombre);

//nombre = "Ignacio";

const apellido = "Perez";
console.log(nombre, apellido);

/* const nombreUsuario = window.prompt("Ingrese su nombre");
console.log(nombreUsuario); */

// Scoope - alcance global/local

let color = "rojo";
console.log(color);
{
    color = "gris";
    console.log(color);
    let numero = 17;
}
console.log(color);