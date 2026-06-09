console.log("Ping script_3.js");

function crearCard(){
    const descripcion = window.prompt("Ingresar descripcion");
    const precio = window.prompt("Ingresar el precio");
    const card = `
    |=======================
    |        PRODUCTO       
    |=======================
    |Descripción: ${descripcion}
    |Precio: $${precio}
    |_______________________`;
    console.log(card);
    //return "Gracias por utilizar nuestra función";
}