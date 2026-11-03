console.log("Ping carrito.js");

document
  .querySelectorAll(".carritoProducto")
  .forEach((boton) => {
    boton.addEventListener("click", (e) => {
      //console.log("Click en carrito");
      //console.log(e.target.dataset);
      const yaExiste = carrito.find(producto => producto.id == e.target.dataset.id);
      //console.log(yaExiste);
      if (!yaExiste) {
        carrito.push({
          id: parseInt(e.target.dataset.id),
          descripcion: e.target.dataset.descripcion,
          precio: parseFloat(e.target.dataset.precio),
          cantidad: 1,
        });
      } else {
        yaExiste.cantidad++;
      }
      carritoStats.cantidadProductos++;
      carritoStats.totalCarrito += parseFloat(e.target.dataset.precio);
      document
      .querySelector("#carritoIconoCantidad")
      .textContent = carritoStats.cantidadProductos;
    })
  })

const carrito = [];
const carritoStats = {
  cantidadProductos: 0,
  totalCarrito: 0,
}


document.querySelector("#carritoIcono")
.addEventListener("click", () => {
  const modalHTML = `<div class="modal">
    <h2>Carrito de compras</h2>
    <table>
      <tr>
        <th>Descripcion</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
      </tr>
      ${carrito.map(producto => `<tr>
          <td>${producto.descripcion}</td>
          <td>${producto.precio
            .toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS"
            })}</td>
          <td>${producto.cantidad}</td>
          <td>${(producto.precio * producto.cantidad)
            .toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS"
            })}</td>
        </tr>`).join("")}
    </table>
    <input type="text" name="nombre" id="nombre" placeholder="Nombre" required>
    <input type="text" name="contacto" id="contacto" placeholder="Contacto" required>
    <button id="btnCerrar">Cerrar</button>
    <button id="btnEnviar">Enviar</button>
  </div>
  <div class="screen"></div>`;
  document.querySelector(".contModal").innerHTML = modalHTML;
  document.querySelector("#btnCerrar")
  .addEventListener("click", () => {
    document.querySelector(".contModal").innerHTML = "";
  });
  document.querySelector("#btnEnviar")
  .addEventListener("click", async() => {
    // validar
    if(carrito.length === 0){return}
    const nombre = document.querySelector("#nombre").value;
    const contacto = document.querySelector("#contacto").value;
    console.log(nombre, contacto);
    if(nombre == "" || contacto == ""){return}
    // enviar pedido con FETCH
    try {
    let respuesta = await fetch("/productos/pedido/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre,
          contacto: contacto,
          producto: carrito
        })
      });
      respuesta = await respuesta.json();
      console.log(respuesta);
    } catch (error) {
      console.log("Error al enviar el pedido", error);
    }
  });
})