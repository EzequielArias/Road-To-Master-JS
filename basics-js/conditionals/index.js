let edad = 17;

if (edad > 17) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menos de edad")
}

if (edad >= 18) {
    console.log("Eres mayor de Edad");
} else {
    console.log("No eres mayor de edad")
}

let fyh = new Date();
// fyh = fyh.getHours()

if ((fyh >= 6) && (fyh <= 13)) {
    console.log("Buenos dias")
} else if ((fyh >= 13) && (fyh <= 20)) {
    console.log("Buenas tardes");
} else if ((fyh >= 20) && (fyh <= 0)) {
    console.log("Buenas noches")
} else {
    console.log("Dejame dormir");
}

//Operador ternario (Condicion) ? verdadera : false;

let cringe = "codificar";

{ cringe == "codificar" ? console.log("Hermano no entendes un choto") : console.log("segui consultando") };

// Switch -- Case

fyh = fyh.getDay()

switch (fyh) {
    case 0:
        console.log("Buen domingo")
        break;
    case 1:
        console.log("Buen lunes")

        break;

    case 2:
        console.log("Buen martes")

        break;
    case 3:
        console.log("Buen miercoles")

        break;
    case 4:
        console.log("Buen jueves")

        break;
    case 5:
        console.log("Buen viernes")

        break;
    case 6:
        console.log("Buen sabado")
        break;

    default:
        console.log("Fua hermano estoy re loco ni se que dia es")
        break;
}

