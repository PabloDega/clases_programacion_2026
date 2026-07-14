document.querySelector("#saludar span button")
  .addEventListener("click", () => {
    // 1- Leer el valor del input
    const nombre = document.querySelector("#saludar input").value;
    // 1_a - Validar input con info
    if (nombre == "") {
      window.alert("Error!! escriba un nombre en el input");
      return;
    }
    // 2- Escribir ese valor en el elemento de salida
    document.querySelector("#saludar #respuesta").textContent = "Hola " + nombre
  });

document.querySelector("#ingredientes button")
  .addEventListener("click", () => {
    // 1- Leer cantidad de comensales
    const comensales = document.querySelector("#ingredientes input").value;
    // 2- Validar dato
    if (comensales === "" ||
      isNaN(parseInt(comensales))) {
      window.alert("Error!! Ingresar un dato numerico en el input");
      return;
    }
    // 3- Calcular cantidades
    const receta = {
      papas: 500,
      leche: 100,
      manteca: 30,
      huevos: 1
    }
    const cantidades = {
      papas: receta.papas * comensales,
      leche: receta.leche * comensales,
      manteca: receta.manteca * comensales,
      huevos: receta.huevos * comensales
    }
    console.log(cantidades);
    // 4- Mostrar resultado
    document.querySelector("#ingredientes ul")
      .innerHTML = `<li>${cantidades.papas}grms de papa</li>
            <li>${cantidades.leche}ml de leche</li>
            <li>${cantidades.manteca}grms de manteca</li>
            <li>${cantidades.huevos} huevo</li>`
  });

const asistentes = [];

document.querySelector("#asistencia #btnAgregar")
  .addEventListener("click", () => {
    //1- Leer dato del input
    const asistente = document.querySelector("#asistencia input").value;
    //2- Validar dato
    if (asistente === "") {
      window.alert("Error!! Ingrese un nombre");
      return;
    }
    //3- Agregar dato al array
    asistentes.push(asistente);
    //4- Limpiar campos
    document.querySelector("#asistencia input").value = "";
  });

document.querySelector("#asistencia #btnVer")
  .addEventListener("click", () => {
    // 1- Validar datos del array
    if (asistentes.length === 0) {
      window.alert("Error!! no hay nombres guardados");
      return;
    }
    // 2- Mostrar datos en #respuesta
    document.querySelector("#asistencia #respuesta").innerHTML = "";
    asistentes.forEach((nombre) => {
      document.querySelector("#asistencia #respuesta")
        .innerHTML += `<div>${nombre}</div>`;
    });
  })

document.querySelectorAll("#carrito #productos .card .btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //console.log("Click en boton");
    //console.log(e.target.dataset.producto);
    totalCarrito += parseInt(e.target.dataset.precio);
    document.querySelector("#totalCarrito").textContent = "Total: $" + totalCarrito;
    itemsCarrito++;
    document.querySelector("#itemsCarrito").textContent = "Items: " + itemsCarrito;
    detalleCarrito[e.target.dataset.index]++;
    // resetear div de respuesta
    document.querySelector("#carrito #respuesta").innerHTML = "...respuesta";
  })
});

let totalCarrito = 0;
let itemsCarrito = 0;
let detalleCarrito = [0, 0, 0];

document
.querySelector("#carrito #btnVer")
.addEventListener("click", () => {
  const respuesta = `
  <div>Remera roja: ${detalleCarrito[0]}</div>
  <div>Remera verde: ${detalleCarrito[1]}</div>
  <div>Remera azul: ${detalleCarrito[2]}</div>`;
  document
  .querySelector("#carrito #respuesta")
  .innerHTML = respuesta;
})

document
.querySelector("#carrito #btnVaciar")
.addEventListener("click", () => {
  document.querySelector("#carrito #respuesta").innerHTML = "...respuesta";
  totalCarrito = 0;
  itemsCarrito = 0;
  detalleCarrito = [0, 0, 0];
  document.querySelector("#totalCarrito").textContent = "Total: $0";
  document.querySelector("#itemsCarrito").textContent = "Items: 0";
})