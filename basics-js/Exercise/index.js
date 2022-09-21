function exercise1 (string) {
    return string.length
}
console.log(exercise1("Hola mundo"));

 const text = string => string.split(" ").slice(1);

console.log(text("Hola mundo"));

const zum = string => string.split(" ");
console.log(zum("Hola mundo que tal"));

const loop = (string, veces) => {
    for (let i = 0; i < veces; i++) {
        console.log(string)
    }
} 
loop("Hola mundo",3)