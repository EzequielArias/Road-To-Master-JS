//POO
/*
Clases - Modelo a seguir.
Objetos - Es una instancia de una clase
Atributos - Es una caracteristica o propiedad de el objeto
            (son variables dentro de un obj)

Metodos - son las acciones que un obj puede realizar
Instancia es la copia del modelo base a seguir
*/ 

// const animal = {
//     nombre : "Gato",
//     sonar() {
//         console.log("Maullido")
//     }
// }

// const animal2 = {
//     nombre : "Lola",
//     sonar() {
//         console.log("Lola uhhhh")
//     }
// }

// console.log(animal2);

//Funcion constructora

function Animal (nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Metodos agregados al prototype de la 
//funcion constructora
    Animal.prototype.sonar = function(){
        console.log("Lola uhhhh");
    }

    //Herencia Prototipica
    function Perro(nombre,genero,tamanio) {
        this.super = Animal;
        this.super(nombre, genero);
        this.tamanio = tamanio;
    }
//Perrp esta heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobre escritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function() {
    console.log("Guau guau");
}

const Snoopy = new Perro("Snoopy","Macho","Pequeño");

console.log(Snoopy);
Snoopy.sonar();
Snoopy.ladrar()