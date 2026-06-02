console.log("ping operadores.js");

// Operadores aritmeticos

let numA = 20;
let numB = 8;

console.log(numA + numB);
console.log(numA - numB);
console.log(numA * numB);
console.log(numA / numB);
console.log(numA % numB);

let numC = 10;
numC = numC + 2;
numC += 2; //numC = numC + 2;
numC -= 5; //numC = numC - 5;
numC *= 2; //numC = numC * 2;
numC /= 3; //numC = numC / 3;
numC++; //numC = numC + 1;
numC--; //numC = numC - 1;
console.log(numC);

// Operadores logicos

let datoA = 10;
let datoB = 20;
let datoC = 20;
let datoD = "20";

console.log(datoA < datoB);
console.log(datoA > datoB);

// igualdad simple
console.log(datoA == datoB); // false
console.log(datoB == datoC); //true
console.log(datoA != datoB); //true
console.log(datoC == datoD); //true

// igualdad estricta
console.log(datoC === datoD); //false
console.log(datoC === Number(datoD)); //true

// And y Or (&& y ||)
console.log(2 == 2 && 3 == 4);
console.log(2 == 2 || 3 == 4);

// Inversion
console.log(!true);