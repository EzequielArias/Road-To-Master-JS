class Animal {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar() {
        console.log("Sonido Mistico..");
    }

    saludar() {
        console.log(`Que onda soy ${this.nombre}`);
    }
}




class Perro extends Animal {
    constructor(nombre, genero, tamanio){
        //Super llama al constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
    }

    ladrar() {
        console.log("Ladrando como un campeon");
    }
}
const mimi = new Animal("Mimi","Hembra"),
      scooby = new Perro("Scooby", "Macho","Great");

      console.log(mimi);
      mimi.saludar()
      mimi.sonar()

    console.log(scooby)
    scooby.ladrar()