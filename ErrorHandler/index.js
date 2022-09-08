try {
    a+b
    console.log("Logica ejecutable")
} catch (e) {
    console.log(`Captura el error : ${e}`);
} finally{
    console.log("se ejecuta al final de las ordenes");
}

try {
    let n = 10;
    if(isNaN(n)) {
        throw new Error("N is not a")
    }
    console.log(n*n)
} catch (error) {
    console.log(error);
}