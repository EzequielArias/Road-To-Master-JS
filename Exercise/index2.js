const invert = (string) => {
    if(!string){
        return console.warn("No ingreso texto obligatorio");
    }
    let j = -1
    let text = []
    for (let i = 0; i < string.length; i++) {
        let position = string.at(j)
        j--
        text.push(position)
    }
    let mod = text.join("")
    // console.log(mod)
}

const search = (string,text) => {

    if(!string)return console.warn("Text inexistente");
    if(!text)return console.warn("Text inexistente para evaluar");

    let i = 0
    let contador = 0;
    while (i!== -1) {
         i = string.indexOf(text,i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.log(`La Palabra ${text} se repite ${contador} veces`)
}

//  search("Hola mundo mundo","mundo")

const palindromo = (string) => {
    if(!string)return console.warn("Text inexistente");

    let mod = string.split("").reverse().join("");
    console.log(mod)
    if(mod !== string)return console.log(`la palabra ${string} no es palindromo`);
    console.log(`la palabra ${string}  es palindromo`)
}

// palindromo("Caracola")
// palindromo("salas")

const patron = (string, text) => {
    if(!string)return console.warn("Text inexistente");
    if(!text)return console.warn("Text inexistente para evaluar");

   return console.log(string.replace(new RegExp(text, "ig"),""))
}
patron("xyz1 xyz2 xyz3 xyz4 xyz5","xyz")