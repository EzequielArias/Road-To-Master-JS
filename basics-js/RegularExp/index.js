/* 
Expresiones Regulares 
Son una secuencia de caracteres que forma un patron de busqueda,
principalmente utilizada para la busqueda de patrones de cadenas de caracteres


https://wikipedia.org/wiki/Expresi%C3%B3n_regular
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

let cadena = "Lorem ipsum etc"

let expReg = new RegExp('Lorem',"");
let expReg2 = /lorem/;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));