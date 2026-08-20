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