console.log("Ping script_2");

document
.querySelector("#saludar2")
.addEventListener("click", (e) => {
    console.log("Hola mundo!!");
    console.log(e);
});

document
.querySelector("#eventosMouse")
.addEventListener("click", () => {
    console.log("Evento click");
});

document
.querySelector("#eventosMouse")
.addEventListener("mouseover", () => {
    console.log("Evento mouseover");
});

document
.querySelector("#eventosMouse")
.addEventListener("mouseout", () => {
    console.log("Evento mouseout");
});

document
.querySelector("#eventosMouse")
.addEventListener("mousedown", () => {
    console.log("Evento mousedown");
});

document
.querySelector("#eventosMouse")
.addEventListener("mouseup", () => {
    console.log("Evento mouseup");
});

document
.querySelector("#eventosMouse")
.addEventListener("wheel", () => {
    console.log("Evento wheel");
});

document
.querySelector("#eventosMouse")
.addEventListener("mousemove", (e) => {
    //console.log("Evento mousemove");
    //console.log(e.offsetX + "/" + e.offsetY);
    e.target.textContent = e.offsetX + "/" + e.offsetY;
});

document
.querySelector("#eventosMouse")
.addEventListener("contextmenu", (e) => {
    console.log("Evento contextmenu");
    e.preventDefault();
});

document
.querySelector("#eventoTeclado")
.addEventListener("keydown", () => {
    console.log("Evento keydown");
});

document
.querySelector("#eventoTeclado")
.addEventListener("keyup", () => {
    console.log("Evento keyup");
});

document
.querySelector("#eventoTeclado")
.addEventListener("keypress", (e) => {
    console.log("Evento keypress");
    console.log("tecla: " + e.key);
    if(e.key === "a"){e.preventDefault()}
});

document
.querySelector("#eventoTeclado")
.addEventListener("focus", (e) => {
    console.log("Evento focus");
    e.target.style.backgroundColor = "yellow";
});

document
.querySelector("#eventoTeclado")
.addEventListener("blur", (e) => {
    console.log("Evento blur");
    e.target.style.backgroundColor = "unset";
});