document
.querySelector("button")
.addEventListener("click", () => {
    console.log(1);
    console.log(2);
    setTimeout(() => {
        console.log(3);
    }, 0)
    console.log(4);
    setTimeout(() => {
        console.log(5);
    }, 0)
    console.log(6);
})

// Promesas

const promesa1 = new Promise(() => {});
console.log(promesa1);

const promesa2 = new Promise((resolve, reject) => {
    resolve("Promesa resuelta");
});
console.log(promesa2);

const promesa3 = new Promise((resolve, reject) => {
    reject("Promesa rechazada");
})
console.log(promesa3);

const promesa4 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Pomesa 4 cumplida");
    }, 2000);
})
console.log(promesa4);

promesa4
.then((resp) => {console.log(resp)})
.catch((error) => {console.warn(error)})
.finally(() => {console.log("Proceso 4 finalizado")})

// Async await
console.log("T1");

const promise5 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Proceso exitoso");
    }, 4000)
})

async function leerPromesa5(){
    console.log(await promise5);
}

// promise5.then((resp)=> {console.log(resp)})

leerPromesa5();

console.log("T2");