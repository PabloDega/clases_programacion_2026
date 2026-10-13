console.log("ping Dashboard.js");

document
.querySelector("#editarProducto")
.addEventListener("click", () => {
    const id = window.prompt("Ingresar ID del producto a editar");
    // validar ese ID
    const path = `/productos/editar/${id}`;
    window.location = path;
});