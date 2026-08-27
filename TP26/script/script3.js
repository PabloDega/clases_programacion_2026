console.log("ping Fetch 3");

document
.querySelector("#btnChiste")
.addEventListener("click", () => {
    fetch("http://www.official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((res) => {
        const html = `
        <span>${res.setup}</span>
        <span>${res.punchline}</span>`;
        document
        .querySelector("#salidaChiste")
        .innerHTML = html;
    })
    .catch((error) => {
        console.log("Error en fetch a chistes " + error);
    })
})

const click = new Event("click");

document
.querySelector("#btnChiste")
.dispatchEvent(click);

document
.querySelector("#btnGatos")
.addEventListener("click", () => {
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((res) => {
        const html = `
        <span>${res.fact}</span>`;
        document
        .querySelector("#salidaGatos")
        .innerHTML = html;
    })
    .catch((error) => {
        console.log("Error en fetch de gatos" + error);
    })
})

document
.querySelector("#btnGatos")
.dispatchEvent(click);

document
.querySelector("#btnPerros")
.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => {
        const html = `
        <span><img src="${res.message}" style="width: 300px"></span>`;
        document
        .querySelector("#salidaPerros")
        .innerHTML = html;
    })
    .catch((error) => {
        console.log("Error en fetch de gatos" + error);
    })
})

document
.querySelector("#btnPerros")
.dispatchEvent(click);

document
.querySelector("#btnEdad")
.addEventListener("click", () => {
    const nombre = document.querySelector("#nombreEdad").value;
    if(nombre === ""){return}
    fetch(`https://api.agify.io?name=${nombre}`)
    .then((res) => res.json())
    .then((res) => {
        const html = `
        <span>${res.age}</span>`;
        document
        .querySelector("#salidaEdad")
        .innerHTML = html;
    })
    .catch((error) => {
        console.log("Error en fetch de Edad" + error);
    })
})