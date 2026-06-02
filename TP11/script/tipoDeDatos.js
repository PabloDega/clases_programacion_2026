console.log("ping tipoDeDatos.js");

// Tipos de Datos

let numeros = 44.7;
let string = "Lo que quieras";
let booleano = true; //false
let nulo = null;
let indefinido;
let array = [2, 18, "texto", false];
let objeto = {
    nombre: "pablo",
    apellido: "Dega",
    telefono: 1121654
}

console.log(numeros);
console.log(typeof(numeros));
console.log(typeof(string));
console.log(typeof(booleano));
console.log(typeof(nulo));
console.log(typeof(indefinido));
console.log(typeof(array));
console.log(typeof(objeto));

let num1 = 33;
let num2 = "22";
num2 = Number(num2);
console.log(num1 + num2);

let pi = "3.14159 es el valor de pi";

let piNumber = Number(pi);
console.log(piNumber, typeof(piNumber));

let piParseInt = parseInt(pi);
console.log(piParseInt, typeof(piParseInt))

let piParseFloat = parseFloat(pi);
console.log(piParseFloat, typeof(piParseFloat));

let errorFloat = 100000 / 3;
console.log(errorFloat);