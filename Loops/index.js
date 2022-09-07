let contador = 0;

// while (contador < 10){
// console.log(contador)
// contador++
// }

// do{
//     console.log(contador);
//     contador++
// }while(contador < 10) {
    
// }

let peliculas = ["scary movie", "JohnCarter", "MarvelDC"]
/*for (let i = 0; i < peliculas.length; i++) {
    console.log(`el valor de i es${i}`)
    const element = peliculas[i];
    console.log(element)
}*/

const eze = {
    nombre : "Ezequiel",
    apellido : "Arias",
    edad : 21
}
//Permite recorrer propiedades de un Objeto
/*for (const prop in eze) {
    console.log(`Key ${prop}, Value ${eze[prop]}`)
}*/

//Recorre todos los elementos de cualquier elemento que sea iterable en JS
for (const element of peliculas) {
    console.log(element)
}
