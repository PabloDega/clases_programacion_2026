console.log("Ping con funciones.js");

// Funcion declarada
function hola(nombre){
    console.log(`Hola ${nombre}`);
}

hola("Pablo");
hola("Maca");

// Funcion anonima
const saludar = function(nombre){
    console.log(`Saludos ${nombre}`);
}

saludar("Lucio");

// Funcion flecha
const adios = (nombre) => {
    console.log(`Adios ${nombre}`);
}

adios("Sergio");

// return

function calculo(a, b){
    let resultado = a + b;
    return resultado;
}

const operacion = calculo(5, 7);
console.log(operacion);

// return - opcion 2
function calculo(a, b){
    return a + b;
}

console.log(calculo(5, 7));

// return en funcion flecha
const calcular = (a, b) => a + b;
console.log(calcular(6, 7));

// callbacks

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

console.log(restar(7, 4));

const calculadora = (a, b, cb) => cb(a, b);

console.log(calculadora(7, 5, restar));

// IIFE - Inmediately Invoked Function Expressions
(function iifePrivada(){
    console.log("IIFE eejcutada");
})();