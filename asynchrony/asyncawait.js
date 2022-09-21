function cuadradoCallback (value) {
    if(typeof value !== "number") return Promise.reject("Error el valor ingresado no es un numero");
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value : value,
                result : value * value
            })
        }, 0 | Math.random() * 1000);
    })
}

async function funcionAsincrona (value){
    try {
        console.log("Inicio de Async Function");
        let obj =  await cuadradoCallback(0)
        console.log(`Promise : ${obj.value}, ${obj.result}`);

        obj =  await cuadradoCallback(1)
        console.log(`Promise : ${obj.value}, ${obj.result}`);

        obj =  await cuadradoCallback(2)
        console.log(`Promise : ${obj.value}, ${obj.result}`);

        obj =  await cuadradoCallback(3)
        console.log(`Promise : ${obj.value}, ${obj.result}`);

        obj =  await cuadradoCallback(4)
        console.log(`Promise : ${obj.value}, ${obj.result}`);

        console.log("Fin")

    } catch (error) {
        console.error(error);
    }
}

funcionAsincrona()