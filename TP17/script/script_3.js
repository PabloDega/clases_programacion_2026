console.log("Ping script_3");

let mochila = ["Lapiz", "Cuaderno", "Goma", "Regla", "Colores"];

console.log(`Mochila completa: ${mochila}`);

// acceder a item especifico
console.log(`Segundo elemento de la mochila: ${mochila[1]}`);

// modificar un item
mochila[2] = "Sacapuntas";
console.log(`Mochila modificada: ${mochila}`);

// Largo del array
console.log(`Tengo ${mochila.length} elemntos en la mochila`);

// Seleccionar extremos
console
.log(`El primer elemento es: ${mochila[0]}`);
console
.log(`El ultimo elemento es: ${mochila[mochila.length - 1]}`);

// Agregar elemento
mochila.push("Marcador");
console.log(`Mochila con marcador: ${mochila}`);

// quitar ultimo elemento
let itemRemovido = mochila.pop();
console.log(`
    Mochila sin marcador: ${mochila}
    elemento eliminado: ${itemRemovido}`);

// vaciar mochila

mochila = [];
console.log(`Mochila vacia: ${mochila}`)