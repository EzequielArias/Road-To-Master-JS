let nombre = "Zeke";
    edad = 22;

const perro = {
    nombre : nombre,
    edad: edad,
    ladrar : function() {
        console.log("Ladrido");
    }
}

console.log(perro);
perro.ladrar();

//Objetos literales Dinamicos.
const dog = {
    nombre,
    edad,
    raza : "Dobberman",
    ladrar() {
        console.log("Ladrido sonico");
    }
}

console.log(dog)
dog.ladrar();