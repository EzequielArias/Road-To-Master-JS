const primo = (n) => {
    let result = n % 2
        op = n / 1
    if(result !== 0 && op === n){
        return console.log(`El numero es primo`)
     }else{
        return console.log(`El numero no es primo`)
 }
}

const impar = (n) => {
    let result = n % 2;
    {result == 0 ? console.log(`El numero ${n} es par`) : console.log(`El numero ${n} es impar`)}
}

const farenheit = (temp, scale) => {
    if(!temp || !scale)return console.log("Todos los campos son obligatorios");

    if(scale === "C"){
        let result  = (1.8 * temp) + 32;
        return console.log(`${temp}°C son : ${result}°F`);
    }
    if(scale === "F"){
        let result = (temp - 32) / 1.8
        return console.log(`${temp}°F son : ${result}°C`);
    }
}

farenheit(55,"F");