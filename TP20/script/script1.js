console.log("ping script1.js");

document
.querySelector("#btnVertical")
.addEventListener("click", () => {
    document
    .querySelector("#distribucion")
    .style.flexDirection = "column";
});

document
.querySelector("#btnHorizontal")
.addEventListener("click", () => {
    document
    .querySelector("#distribucion")
    .style.flexDirection = "row";
});

// ================================
//        Funcion colores
// ================================

document
.querySelectorAll("#cajaColor button")
.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        document
        .querySelector("#cajaColor")
        .style.backgroundColor = e.target.dataset.color;
    })
})

// ================================
//     Funcion tamaño y color
// ================================
let fontsize = 1;

document.querySelector("#btnPequenio")
.addEventListener("click", () => {
    fontsize -= 0.05;
    document.getElementById("texto")
    .style.fontSize = fontsize + "em";
});

document.querySelector("#btnGrande")
.addEventListener("click", () => {
    fontsize += 0.05
    document.getElementById("texto")
    .style.fontSize = fontsize + "em";
});

document.querySelector("#selectColor")
.addEventListener("change", (e) => {
    //console.log(e.target.value);
    document.getElementById("texto")
    .style.color = e.target.value;
});

// ================================
//        Ocultar y mostrar
// ================================

document.querySelector("#btnOcultar")
.addEventListener("click", () => {
    document.getElementById("toggle")
    .style.opacity = 0;
});

document.querySelector("#btnMostrar")
.addEventListener("click", () => {
    document.getElementById("toggle")
    .style.opacity = 1;
});