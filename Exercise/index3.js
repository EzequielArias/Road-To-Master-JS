let getRandomArbitrary = (min, max) =>{
    let azar = Math.floor(Math.random() * (max - min) + min)
        console.log(azar)
  }
  //getRandomArbitrary(501,600)

  const capicua = (n) => {
    if(!n)return console.warn("Coloque un numero para evaluar");
    let invert = n.toString();
    let result = invert.split("").reverse().join("");

    if( invert != result){
        console.log(`El numero ${n} no es capicua`)
    }else{
        console.log(`El numero ${n} es capicua`);
    }
}

const factorial = (n) => {
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n- 1)
    }
}

console.log(factorial(5))