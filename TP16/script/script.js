console.log("Ping string.js");

// Metodos y propiedades de strings

let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

// Propiedad length (largo)
const largo = letras.length;
console.log(largo);

// Metodos de seleccion
let letraNumero = letras.charAt(1);
console.log(letraNumero);
letraNumero = letras.at(1);
console.log(letraNumero);
letraNumero = letras[1];
console.log(letraNumero);

// Extraer seccion

let frase = "Curso de: programación";

let seccion = frase.slice(6, 8);
console.log(seccion);
seccion = frase.slice(-12);
console.log(seccion);
seccion = frase.slice(10);
console.log(seccion);

// Conversion de caja
const minuscula = frase.toLowerCase();
console.log(minuscula);
const mayuscula = frase.toUpperCase();
console.log(mayuscula);

//valor1.toLowerCase() === valor2.toLowerCase();

// Trim (recortar)

let espaciado = "       texto valdio        ";
console.log(espaciado);
let recortado = espaciado.trim();
console.log(recortado);

//valor1.toLowerCase().trim() === valor2.toLowerCase().trim();

// Replace

let nombre = "Pablo Dega";
console.log(nombre);
nombre = nombre.replace("Pablo", "Lucio");
console.log(nombre);

// Ver regExp <---

//Includes
const colores = "Verde, Rojo, Azul";
let consulta = colores.includes("Verde");
console.log(consulta);
consulta = colores.includes("verde");
console.log(consulta);

// Split (separar)
let arreglo = colores.split(",");
console.log(arreglo);