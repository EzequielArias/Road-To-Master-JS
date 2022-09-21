let number = [15,17,20,214];
//Sin destructuring
let uno = number[0],
    dos = number[1],
    tres = number[2];

 console.log(uno,dos,tres);

 //Con destructuring

 const [one, two, three] = number;
 console.log(one,two,three);

 const persona = {
    nombre : "Eze",
    apellido : "Arias",
    edad : 21
 };

 let { nombre,apellido,edad } = persona;
// para que la destructuracion
// funcione la variable que creo se tiene que llamar igual
// que la misma propiedad del objeto.
 console.log(nombre,apellido,edad);