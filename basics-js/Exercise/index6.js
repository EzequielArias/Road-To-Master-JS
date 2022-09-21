// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const countWords = (palabra) => {
    if(!palabra)return console.warn("Palabra es obligatorio");

    let vocales = 0,
        consonantes = 0
        palabra = palabra.toLowerCase();

        for (const letra of palabra) {
            if(/[aeiou]/.countWords(letra)){
                vocales++
            };
            if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){
                consonantes++
            }
        }
        console.log(`Esta palabra tiene ${vocales} vocales y ${consonantes} consonantes`)
}
// test("Hola mundo")

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validateName = (name) => {
    if(!name && !lastname) return console.info("Ingrese un nombre completo nombre / apellido");
    if(typeof name !== "string") return console.error(`El valor ${name} no es valido`);

    let expReg = /[qwertyuiopñlkjhgfdsazxcvbnm]+$/g.test(name);
    return (expReg) ? console.log("El nombre es valido") : console.error("El nombre no es valido");
}

// validateName("Ezequiel arias,6536")

/**
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */

const validateEmail = (email) => {
    if(!email) return console.warn("El campo email es obligatorio");
    if(typeof email !== "string") return console.error(`El valor ${email} no es valido`);

    let expReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    return ((expReg ? console.info("El email es valido") : console.error("el email no es valido")))
}

validateEmail("Ezequiel@gmail.com")