
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

cuadradoCallback(1,)
    .then((obj) =>{
        console.log(`Promise : ${obj.value}, ${obj.result}`);
        return cuadradoCallback(1)
    })
    .then(obj => {
        console.log(`Promise : ${obj.value}, ${obj.result}`);
        return cuadradoCallback(2)
    })
    .then(obj => {
        console.log(`Promise : ${obj.value}, ${obj.result}`);
        return cuadradoCallback(3)
    })
    .then(obj => {
        console.log(`Promise : ${obj.value}, ${obj.result}`);
        return cuadradoCallback(4)
    })
    .then(obj => {
        console.log(`Promise : ${obj.value}, ${obj.result}`);
        return cuadradoCallback(5)
    })
    .then(obj => {
        console.log(`Promise : ${obj.value}, ${obj.result}`);
        console.log("Fin")
    })
    .catch(err => console.error(err));