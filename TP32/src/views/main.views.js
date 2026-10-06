export const mainDashboard = (user) => {
    console.log("mainDashboard en ejecucion");
    let vista = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home de mi empresa</title>
    <link rel="stylesheet" href="/css/estilo.css">
</head>
<body>
    <header>
        Home de mi empresa
        <div id="usuario">
            <span>👤</span>
            <span>${user?.usuario || "usuario"}</span>
            <a href="/logout">Cerrar sesion</a>
        </div>
    </header>
    <nav>
        <a href="index.html">Home</a>
        <a href="/productos">Productos</a>
        <a href="contactos.html">Contactos</a>
        <a href="login.html">Login</a>
    </nav>
    <main>
        <h1>Panel de control</h1>
        <div>Bienvenido ${user?.usuario || "usuario no logueado"}!</div>
        <a href="/productos/crear">Crear producto</a>
    </main>
    <footer>
        Creado por Pablo &copy;2026
    </footer>
</body>`;
    return vista;
}