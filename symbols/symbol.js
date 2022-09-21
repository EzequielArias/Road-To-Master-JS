const NAME = Symbol("Name");
const HI = Symbol("Hi");

const person = {
    [NAME] : "Eze"
}

console.log(person)

person.NAME = "Ezequiel arias" 
// console.log(person);
// console.log(person[NAME]);

 person[HI] = () => {
    console.log("Greetings")
}

console.log(person);
person[HI]();

for (const props in person) {
   console.log(props);
   console.log(person[props])
}

console.log(Object.getOwnPropertySymbols(person))