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