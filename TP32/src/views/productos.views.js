export const vistaProductos = (productos) => {
    // crear la vista HTML
    let vista = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home de mi empresa</title>
    <link rel="stylesheet" href="css/estilo.css">
</head>
<body>
    <header>Home de mi empresa</header>
    <nav>
        <a href="index.html">Home</a>
        <a href="/productos">Productos</a>
        <a href="contactos.html">Contactos</a>
        <a href="login.html">Login</a>
    </nav>
    <main class="cardCont">
        ${productos.map(producto => `<div class="card">
            <h2>${producto.descripcion}</h2>
            <span>$${producto.precio}</span>
            <span>${producto.categoria}</span>
        </div>`).join("")}
    </main>
    <footer>
        Creado por Pablo &copy;2026
    </footer>
</body>`;
    return vista;
}