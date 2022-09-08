//REST parameter
function sumar(a, b, ...c){
    let resultado = a + b;

    c.forEach((e) =>{
        resultado +=e
    })

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3,4,5,6));


//Spread operator

const arr1 = [1,2,3,4,5];
      arr2 = [6,7,8,9,0];

    console.log(arr1,arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);
/**Lo que hace el spreed operators,
 *  es traerme todos los valores de objetos iterables 
 * de una manera mas dinamica y util para su facil transporte/uso 
 * en otra parte*/