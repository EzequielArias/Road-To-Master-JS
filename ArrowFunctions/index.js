// Cuando tu funcion es solo 1 linea de codigo no es necesario las llaves
let documento = () => console.log("Cual es tu ID?")
documento();

//En el caso para agregar si la => solo recibe 1 parametro no necesitamos los parentesis
let ID = nombre => console.log(`Gracias ${nombre} por tu ID`)
ID("Zeke");


/*const sumar = function(a,b){
    return a + b
};
console.log(sumar(1,3))*/

const sumar = (a, b) => a + b;
console.log(sumar(2,3))
/*En esta => de nombre sumar comparandola con la de arriba
Podemos ver el return implicito de la => no hacefalta 
declarar la palabra reservada RETURN*/

const Sennin = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
Sennin();

//Utilizando => como callback para ForEach;
const numeros = [1,2,3,4,5];
numeros.forEach((e,i) =>console.log(`El elemento ${e} esta en la posicion ${i}`));

/*La function flecha rompe el contexto 
de donde esten y reconocer el
componente padre como su contexto*/