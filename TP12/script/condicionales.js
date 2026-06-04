console.log("ping condicionales.js");

if(2 == 3){
    console.log("operacion logica verdadera");
} else {
    console.log("operacion logica falsa");
}

let color = "verde" //window.prompt("Color del semaforo");

if(color == "verde"){
    console.log("Avanzar");
} else if(color == "amarillo"){
    console.log("Precaucion");
} else if(color == "rojo"){
    console.log("Detenerse");
} else {
    console.error("[ERROR] - Semaforo roto");
}

// Cargar monto de compra ("window.prompt()") / Si > $50.000 descuento del 25% / Si > $20.000 descuento 10% - sino ningun descuento - devolver valor por consola ("console.log()")

/* let monto = window.prompt("Ingresar monto de la compra");

if(monto > 50000){
    console.log("25% de descuento");
    console.log("Valor a pagar:", (monto * 0.75));
} else if(monto > 20000){
    console.log("10% de descuento");
    console.log("Valor a pagar:", (monto * 0.9));
} else {
    console.log("Sin descuento");
    console.log("Valor a pagar:", (monto));
}  */


// Ejercicio - llevando mas de 10 pord por un total superior a $200.000 aplicar un descuento del 20% al total

let total = window.prompt("Ingresar total");
let cantidad = window.prompt("Ingresar cantidad");

if(cantidad > 10 && total > 200000){
    console.log(`Aplica descuento, cobrar: ${total * 0.8}`);
} else {
    console.log(`No aplica descuento, cobrar: ${total}`);
}