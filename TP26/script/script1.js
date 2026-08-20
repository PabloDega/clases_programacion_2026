console.log("Ping fetch 01")

// Leer archivo de almacenamiento local
fetch("./data/datos.json")
.then((res) => {
    console.log(res);
    if(res.ok === false){
        throw new Error("Error en el fetch");
    }
    return res.json();
})
.then((res) => {
    console.log(res);
    crearVista(res);
})
.catch((error) => {
    console.log(error);
})

function crearVista(datos){
    let html = `
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apllido</th>
            </tr>
        </thead>
        <tbody>`
    datos.forEach((dato) => {
        html += `
        <tr>
            <td>${dato.nombre}</td>
            <td>${dato.apellido}</td>
        </tr>`
    })
    html += `</tbody></table>`;
    document
    .querySelector("#salida")
    .innerHTML = html;
}