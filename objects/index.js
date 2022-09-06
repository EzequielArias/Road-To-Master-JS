const b = {}

const c = new Object();
/**Dentro de un objeto a las variables se les van a llamar
 *  atributos / propiedades 
 * y  las funciones metodos */

const jon = {
    nombre : "Jon",
    apellido : "Mircha",
    edad : 35,
    pasatiempos :["correr","Hacer ejercicio", "Dar clases"],
    soltero: false,
    contacto : {
        email: "johnmircha@gmail.com",
        twitter: "@johnmircha",
        movil: "123412421"
    },
    saludar : function(){
        console.log("Hola :D");
    },
    decirNombre : function() {
        console.log(`Hola me llamo ${this.nombre}
        y mi apellido es ${this.apellido},
        Tengo ${this.edad}`);
    }
}

console.log(jon)

console.log(jon["nombre"]);
console.log(jon["apellido"]);
console.log(jon.nombre);
console.log(jon.soltero);
console.log(jon.pasatiempos[1]);
console.log(jon.contacto.movil);
jon.saludar();
jon.decirNombre();

console.log(Object.keys(jon));
console.log(Object.values(jon));
console.log(jon.hasOwnProperty("nombre"));
console.log(jon.hasOwnProperty("nacimiento"));