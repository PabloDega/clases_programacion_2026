console.log("ping script_1");

console.log(window);

console.log(document);

let query = document.querySelector("h1");
console.log(query);

query = document.getElementsByClassName("claseDiv");
console.log(query);

query = document.getElementById("idDiv");
console.log(query);

query = document.querySelectorAll("div");
console.log(query);

console.clear();

query = document.querySelector("#idDiv");
console.log(query.textContent);

document.querySelector("#idDiv").textContent = "Nuevo texto";

document
.querySelector("#idDiv")
.textContent += " - Desde Javascript";

document
.querySelector("#estiloDiv")
.style.border = "4px solid green";

document
.querySelector("#estiloDiv")
.style.backgroundColor = "yellow";

document
.querySelector("#divVacio")
.innerHTML += "<h2>Subtitulo agregado</h2>";

const element = document.createElement("p");
element.textContent = "Parrafo creado con createElement()";

document
.querySelector("#divVacio")
.appendChild(element);
