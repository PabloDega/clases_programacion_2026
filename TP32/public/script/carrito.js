console.log("Ping carrito.js");

document
.querySelectorAll(".carritoProducto")
.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        // agregar producto al carrito
        console.log(e.target.dataset);
        const existe = carrito
        .find(item => item.id == e.target.dataset.id)
        if(existe){
            // actualizarlo
            existe.cantidad++;
            carritoStats.cantidadProductos++;
            carritoStats.totalCarrito += parseFloat(e.target.dataset.precio);
        } else {
            carrito.push({
                id: e.target.dataset.id,
                descripcion: e.target.dataset.descripcion,
                precio: e.target.dataset.precio,
                cantidad: 1
            })
            carritoStats.cantidadProductos++;
            carritoStats.totalCarrito += parseFloat(e.target.dataset.precio);
        } 
        document.querySelector("#carritoIconoCantidad").textContent = carritoStats.cantidadProductos;
    })
})

const carrito = [];
const carritoStats = {
    cantidadProductos: 0,
    totalCarrito: 0
}

document.querySelector("#carritoIcono").addEventListener("click", () => {
    const htmlModal = `<div class="modal">
        <h2>Carrito de compras</h2>
        <table>
            <thead>
                <tr>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${carrito.map(item => `
                    <tr>
                        <td>${item.descripcion}</td>
                        <td>${parseFloat(item.precio).toLocaleString("es-AR", {
                            style: "currency",
                            currency: "ARS"
                        })}</td>
                        <td>${item.cantidad}</td>
<td>${(parseFloat(item.precio) * parseFloat(item.cantidad)).toLocaleString("es-AR", {
                            style: "currency",
                            currency: "ARS"
                        })}</td>
                    </tr>`).join("")}
            </tbody>
        </table>
    </div>`;
    document.querySelector("#modalCarrito").innerHTML = htmlModal;
})