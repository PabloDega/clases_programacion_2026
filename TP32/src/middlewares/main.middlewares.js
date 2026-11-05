export const validarLogin = async (req, res, next) => {
  console.log("--> Middleware de validacion de login en ejecucion");
  let validacion = true;
  // Validamos
  const usuario = req.body.usuario.trim();
  const password = req.body.password.trim();
  if (usuario === "" || password === "") {
    validacion = false;
  }
  // Si sale mal
  if (validacion === false) {
    console.log("--> Error al validar login");
    res.status(400).send("Error al validar datos");
    return;
  }
  // Si esta ok
  console.log("--> Validacion de login exitosa");
  next();
}

export const verificarLogin = (req, res, next) => {
  if (!req.session?.user) {
    res.redirect("/login.html");
    return;
  }
  next();
}

export const validarPedido = (req, res, next) => {
  // validar body
  console.log("--> Middleware de validacion de pedido en ejecucion");
  try {
    if (req.body.nombre === "" ||
      req.body.contacto === "" ||
      typeof (req.body.nombre) !== "string" ||
      typeof (req.body.contacto) !== "string") {
      res.status(400).json({
        ok: false,
        mensaje: "Faltan datos en el envio"
      });
      return;
    }
    let validacionProductos = true;
    // validar los productos del carrito

    if (typeof (req.body.productos) !== "object") {
      validacionProductos = false;
    }

    if (req.body.productos.length === 0) {
      validacionProductos = false;
    }

    req.body.productos
      .forEach((prod) => {
        if (!prod.id || !prod.cantidad || !prod.precio || !prod.descripcion) {
          validacionProductos = false;
        }
        if (typeof (prod.id) !== "number" ||
          typeof (prod.cantidad) !== "number" ||
          typeof (prod.precio) !== "number" ||
          typeof (prod.descripcion) !== "string") {
          validacionProductos = false;
        }
      })

    if (validacionProductos === false) {
      res.status(400).json({
        ok: false,
        mensaje: "Error encontrado en el carrito de productos"
      });
      return;
    }
    next();
  } catch (error) {
    console.log("Error al validar", error);
    res.status(400).json({
      ok: false,
      mensaje: "Error al validar"
    });
  }
}

const ejemploReqBody = {
  nombre: 'pablo',
  contacto: '1234654613116',
  productos: [
    {
      id: 9,
      descripcion: 'Milanesa de napolino',
      precio: 12000,
      cantidad: 1
    },
    { id: 8, descripcion: 'papel lokito', precio: 2000, cantidad: 3 },
    {
      id: 2,
      descripcion: 'Bandeja de papel',
      precio: 1000,
      cantidad: 2
    }
  ]
}