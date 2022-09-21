const array1 = [];
const array2 = [1,true,"hola",["a", "b","c"]];
console.log(array2)

const c = Array.of("X","Y","Z", 9, 8, 7);
console.log(c);

// const d = Array(100).fill(false)
// console.log(d);

const e = new Array();
console.log(e);

const colores = ["Rojo", "Verde", "Azul"];
colores.push("Negro")
console.log(colores);


colores.forEach((e,i) =>{
    console.log(`<li id="${i}>${e}</li>`)
})