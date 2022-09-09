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
        this.raza  = null;
    }

    ladrar() {
        console.log("Ladrando como un campeon");
    }
    /*Un metodo estatico es puede ejecutar sin
    necesidad de instanciar la clase
    */
   static whoAreU(){
    console.log("I'm the choosed one");
   }
   //Los setterrs y getters son metodos especiales que nos
   //permiten establecer y obtener los valores de 
   //atributos de nuestra clase
   get getRaza(){
    return this.raza;
   }

   set setRaza(raza){
    this.raza = raza;
   }
}
const mimi = new Animal("Mimi","Hembra"),
      scooby = new Perro("Scooby", "Macho","Great");

      console.log(mimi);
      mimi.saludar()
      mimi.sonar()

    console.log(scooby)
    scooby.ladrar();
    Perro.whoAreU();
    scooby.setRaza = "Gran danes"
    console.log(scooby.getRaza)