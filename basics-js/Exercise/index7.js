const cuadrado = (array) => {
    if(!array)return console.error("Campo requerido"); 
    
    let array2 = []
    for (const number of array) {
        let result = number * number;
        array2.push(result)
    }
   return console.log(array2)
}
// cuadrado([2,6,7]);

const higherOrLower = (array) => {
    if(!array)return console.error("Campo requerido"); 

    

    let array2 = [];
    for (let i = 0; i < array.length; i++) {
        let a = array[i]
        let b = array[i + 1]

        if(a > b){
            if(array2.length === 0) {
                array2.push(a); 
            }else{
                array2.splice(0,1,a);
            }
        }

        if(a < b){
            if(array2.length === 1){
                array2.push(a);
            }else{
                array2.splice(1,1,a);
            }
        }
        console.log(array[i + 1])
    }
    return console.log(array2)
}

// higherOrLower([1,2,3,4,5])

const odd = (array) => {
    if(!array)return console.error("Campo requerido"); 
    if(!(array instanceof Array))return console.error("Tu array no es un array");
    let par = []
    let impar = []
    for (const n of array) {
        let result = n % 2
        {result === 0 ? par.push(n) : impar.push(n)}
    }
    console.log(`Tu lista de numeros pares ${par} y Tu lista de numeros impares ${impar}`)
}
// odd([1,2,3,4,5,6,7,8,9,10]);