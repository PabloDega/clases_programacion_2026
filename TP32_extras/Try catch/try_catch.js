try {
    const numero = "A";
    const resultado = numero / 2;
    if(isNaN(resultado)){
        throw new Error("Dato NaN detectado");
    }
    console.log(resultado);
} catch (error) {
    console.log("Error capturado");
    console.log(error.message);
}