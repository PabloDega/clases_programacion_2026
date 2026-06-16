console.log("Ping script_2.js");

// Iteraciones - repeticiones

// forEach()

const colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

colores.forEach((color, i) => {
    console.log(color);
    console.log(i);
});

let numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((numero) => {
    console.log(numero * 10);
});

console.log(numeros);

numeros.forEach((x, i) => {
    numeros[i] *= 10;
});

console.log(numeros);

numeros = numeros.join("*");
console.log(numeros);
numeros = numeros.split("*");
console.log(numeros);

numeros.forEach((numero, i) => {
    numeros[i] = Number(numero);
});
console.clear();
console.log(numeros);

// Metodo find()

const busqueda = colores
.find(dato => dato == "amarillo");
console.log(busqueda);

const buscarOrden = colores
.findIndex(dato => dato == "amarillo");
console.log(buscarOrden);

colores[buscarOrden] = "gris";
// colores[colores.findIndex(dato => dato == "amarillo")] = "gris";
console.log(colores);
console.clear();

// Metodo reduce()
const total = numeros
.reduce((acumulador, numero) => acumulador + numero);

console.log(total);

// Array de arrays - array anidado
const datos = [
    ["pablo", 123], 
    ["sergio", 456], 
    ["marcos", [789, 1011]]
];

// ver datos de sergio por consola
console.log(datos[1]);
// ver numero de pablo
console.log(datos[0][1]);
// ver primer numero de marcos
console.log(datos[2][1][0]);