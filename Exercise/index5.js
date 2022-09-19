const bin = (n) => {
    let resultBinary = [];

    while(n > 1){
        resultBinary.push(n % 2)
        n = Math.floor(n / 2)
    }
    resultBinary.push(n)

    return console.log(parseInt(resultBinary.reverse()));
}
// bin(13)

const descuento = (porcentaje, precio) => {
    let top = precio - (porcentaje / 100 * precio) 

    return console.log(top)
}

// descuento(20, 1000);

const tiempo = (fecha) => {
    
    if(fecha === undefined) return console.log("No ingresaste la fecha");
    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida")

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMilisegundo = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMilisegundo);

    return (Math.sign(aniosHumanos) === -1)
            ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
            :   (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
        
}
tiempo()
tiempo(new Date());
tiempo(new Date(2001,3,27))