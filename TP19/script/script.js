console.log("ping script.js");

/* document
.querySelector("#btnHome")
.addEventListener("click", (e) => {
    console.log("Click en boton home");
    console.log(e.target.dataset.destino);
    console.log(e.target.dataset.url);
});

document
.querySelector("#btnContactos")
.addEventListener("click", (e) => {
    console.log("Click en boton contactos");
    console.log(e.target.dataset.destino);
    console.log(e.target.dataset.url);
});

document
.querySelector("#btnProductos")
.addEventListener("click", (e) => {
    console.log("Click en boton productos");
    console.log(e.target.dataset.destino);
    console.log(e.target.dataset.url);
}); */

document
.querySelectorAll("button")
.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(`click en ${e.target.dataset.destino}`);
        window.location = e.target.dataset.url
    })
})